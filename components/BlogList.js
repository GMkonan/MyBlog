import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

const Articles = styled.div`
margin: 0 auto;
width: 1000px;
border-left-width: 0.1rem;
border-right-width: 0.1rem;
border-left-style: solid;
border-right-style: solid;
border-color: rgb(130, 141, 154, 0.4);
@media(max-width: 800px) {
    width: auto;
  }
`;

const ArticTitle = styled.a`
    font-size: 1.6rem;
    color: #dfe9f2;
    @media(max-width: 800px) {
        font-size:  1.2rem;
        width: auto;
      }
`;

const List = styled.ul`
    list-style-type:none;
`;

const Items = styled.li`
    margin:0 0 20px 0;  
`;

const SpanDate = styled.span`
    margin: 10px 0 0 0;
    display: inline-block;
`;


const BlogList = ({ posts }) => {

    return(
        <Articles>
                
                <List >
                    {posts.map((post) => (
                        <Items key={post.id}>
                            <Link href={`/posts/${post.id}`} passHref={true}>
                                <ArticTitle>{post.title}</ArticTitle>
                            </Link>
                            <br />
                            <SpanDate>{new Date(post.published_at).toLocaleDateString()}</SpanDate>
                        </Items>
                        
                    ))}
                </List>
                </Articles>
    )
}

export default BlogList;