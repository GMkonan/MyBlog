import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header'
import styled from 'styled-components';
import Introduction from '../components/Introduction';
import BlogList from '../components/BlogList';

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

const Home = ({title, description, data}) => {

    return (
        <div>
            <Header />
            <Layout>
                <Introduction />
                <Title>{title}</Title>
                <Space></Space>
                <BlogList data={data}/>
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