import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogItem from './BlogItem';

const BlogList = () => {
  const { blogs, setIsModalOpen, setCurrentBlog } = useContext(BlogContext);

  const handleAddBlog = () => {
    setCurrentBlog(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleAddBlog}>Add New Blog</button>
      
     
      <div>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;