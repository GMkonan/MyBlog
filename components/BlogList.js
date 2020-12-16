import React from 'react';
import matter from 'gray-matter';
import Link from "next/link";
import styled from 'styled-components';

const Articles = styled.div`
margin: 0 auto;
width: 800px;
border-left-width: 0.1rem;
border-right-width: 0.1rem;
border-left-style: solid;
border-right-style: solid;
border-color: rgb(130, 141, 154, 0.4);
`;

const ArticTitle = styled.a`
    font-size: 1.6rem;
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


const BlogList = ({ data }) => {
    //map the data going to each file and getting the parts
    //between ---- with matter
    const RealData = data.map((blog) => matter(blog));
    //go to each of the "tags" that we got with matter and get data
    const ListItems = RealData.map((listItem) => listItem.data);

    return(
        <Articles>
                
                <List >
                    {ListItems.map((blog, i) => (
                        <Items key={i}>
                            <Link href={`/${blog.slug}`}>
                                <ArticTitle>{blog.title}</ArticTitle>
                            </Link>
                            <br />
                            <SpanDate>{blog.date}</SpanDate>
                        </Items>
                    ))}
                </List>
                </Articles>
    )
}

export default BlogList;