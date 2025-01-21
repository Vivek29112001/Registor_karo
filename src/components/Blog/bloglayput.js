import React from 'react';
import BlogPost from './Blogpost';
import posts from './post';
import './blog.css';

const BlogLayout = () => {
  // Add a check to ensure posts is an array
  if (!Array.isArray(posts)) {
    return <div>No blog posts available.</div>;
  }

  return (
    <div className="blog-layout">
      {posts.map(post => (
        <BlogPost key={post.title} {...post} />
      ))}
      <button className="show-more-button">Show more blogs</button>
    </div>
  );
};

export default BlogLayout;
