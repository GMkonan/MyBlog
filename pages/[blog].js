import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Header from '../components/Header';

const BlogLayout = styled.div`
    margin: 0 auto;
    width: 800px;
`;

const Card = styled.pre`
text-align: left;
margin: 1em 0;
padding: 0.5em;
overflow-x: auto;
border-radius: 3px;
position: relative;
& .token-line {
  line-height: 1.3em;
  height: 1.3em;
}
font-family: 'Courier New', Courier, monospace;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.8em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const CodeBlock = ({ language, value }) => {

    const handleClick = () => {
        copyToClipboard(value);
    }

    return (
        <Card>
        <CopyCode onClick={handleClick}>Copy</CopyCode>
        <SyntaxHighlighter showLineNumbers={true} language={language} style={dracula}>
            {value}
        </SyntaxHighlighter>
        </Card>
    );
};

const Blog = ({ content, data }) => {
    const frontmatter = data;
    return (
        <Layout>
        <Header />
    <BlogLayout>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
        <ReactMarkdown escapeHtml={true} source={content} renderers={{ code: CodeBlock }} />
    </BlogLayout>
    </Layout>
    )
};

export default Blog;

//getInitialProps is used to asynchronously fetch some data,
// which then populates props

Blog.getInitialProps = async (context) => {
    const { blog } = context.query;
    
    const content = await import(`../content/${blog}.md`);
    const data = matter(content.default);

    return { ...data };
}