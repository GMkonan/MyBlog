import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = ({ content, data }) => {
    const frontmatter = data;
    return (
    <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
        <ReactMarkdown escapeHtml={true} source={content} />
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