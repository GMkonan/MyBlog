import React from 'react';
import Layout from './../components/Layout';
import Header from './../components/Header'
import styled from 'styled-components';
import QuickAboutMe from './../components/QuickAboutMe';
import BlogList from './../components/BlogList';
import axios from 'axios';
import { useRouter } from 'next/router';
import {getPosts} from './api/index'
const Title = styled.h1`
    margin-left: 10px;
    margin: 0 auto;
    width: 1000px;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-color: rgb(130, 141, 154, 0.4);
    @media(max-width: 800px) {
      width: auto;
      margin-left: 10px;
      margin-right: 10px;
    }
`;

const Space = styled.p`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Home = ({posts}) => {

    return (
        <div>
            <Header />
            <Layout>
                <QuickAboutMe />
                <Title>Articles</Title>
                <Space></Space>
                <BlogList posts={posts}/>
            </Layout>
            </div>
    )
}

Home.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default Home;