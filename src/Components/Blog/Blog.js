import React from 'react';
import BlogDetails from './BlogDetails';
import BlogLanding from './BlogLanding';

const Blog = () => {
    return (
        <div>
           <BlogLanding></BlogLanding> 
           <BlogDetails></BlogDetails>
        </div>
    );
};

export default Blog;