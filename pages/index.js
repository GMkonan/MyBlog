import matter from 'gray-matter';
import React from 'react';
import Layout from '../components/Layout';
import Link from "next/link";

const Home = ({title, description, data}) => {
    //map the data going to each file and getting the parts
    //between ---- with matter
    const RealData = data.map((blog) => matter(blog));
    //go to each of the "tags" that we got with matter and get data
    const ListItems = RealData.map((listItem) => listItem.data);

    return (
            <Layout>
                <h1>{title}</h1>
                <ul>
                    {ListItems.map((blog, i) => (
                        <li key={i}>
                            <Link href={`/${blog.slug}`}>
                                <a>{blog.title}</a>
                            </Link>
                            <p>{blog.description}</p>
                            <span>{blog.date}</span>
                        </li>
                    ))}
                </ul>
            </Layout>
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
            description: siteData.default.description,
        },
    };
}