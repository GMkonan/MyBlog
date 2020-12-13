import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'react-bootstrap';

const CodeBlock = ({ language, value }) => {

    return (
        <Card style={{width: '40rem', margin: '0 auto'}}>
        <SyntaxHighlighter showLineNumbers={true} language={language} style={dracula}>
            {value}
        </SyntaxHighlighter>
        </Card>
    );
};

const Blog = ({ content, data }) => {
    const frontmatter = data;
    return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
        <ReactMarkdown escapeHtml={true} source={content} renderers={{ code: CodeBlock }} />
    </div>
    )
};

export default Blog;

Blog.getInitialProps = async (context) => {
    const { blog } = context.query;
    
    const content = await import(`../content/${blog}.md`);
    const data = matter(content.default);

    return { ...data };
}