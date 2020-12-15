import matter from 'gray-matter';
import React from 'react';
import Layout from '../components/Layout';
import Link from "next/link";
import Header from '../components/Header'
import styled from 'styled-components';

const Presentation = styled.div`
    margin: 0 auto;
    width: 800px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Articles = styled.div`
    margin: 0 auto;
    width: 800px;
    border-left-width: 0.1rem;
    border-right-width: 0.1rem;
    border-left-style: solid;
    border-right-style: solid;
    border-color: rgb(130, 141, 154, 0.4);
`;

const Title = styled.h1`
    margin-left: 10px;
    margin: 0 auto;
    width: 800px;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-color: rgb(130, 141, 154, 0.4);
`;

const Space = styled.p`
    padding-top: 20px;
    padding-bottom: 20px;
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

const Home = ({title, description, data}) => {
    //map the data going to each file and getting the parts
    //between ---- with matter
    const RealData = data.map((blog) => matter(blog));
    //go to each of the "tags" that we got with matter and get data
    const ListItems = RealData.map((listItem) => listItem.data);

    return (
        <div>
            <Header />
            <Layout>
                <Presentation>
                <h1>Hi There</h1>
                <p>My name is Guilherme Monteiro Pereira, also known as Konan and I'm a Self-Learning Software Developer.
<br /> <br />
I have always had been really curious, researching ideas that interest me and that got me into programming.
<br /> <br />
I love the tech world and I'm always learning new things while working in projects.</p>

                </Presentation>
                <Title>{title}</Title>
                <Space></Space>
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
            </Layout>
            </div>
    )
}

export default Home;

export async function getStaticProps() {
    const siteData = await import(`../config.json`)
    const fs = require('fs');

    const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

    const blogs = files.filter((fn) => fn.endsWith(".md"));

    const data = blogs.map((blog) => {
        const path = `${process.cwd()}/content/${blog}`;
        const rawContent = fs.readFileSync(path, {
            encoding:"utf-8",
        });

        return rawContent;
    });
    return {
        props: {
            data:data,
            title: siteData.default.title,
            //description: siteData.default.description,
        },
    };
}