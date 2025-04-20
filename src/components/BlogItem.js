import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const BlogItem = ({ blog }) => {
  const context = useContext(BlogContext);
  const { setCurrentBlog, setIsModalOpen, deleteBlog } = context;

  const handleEdit = () => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h3>{blog.title}</h3>
      <img src={blog.imageUrl} alt={blog.title} width="200" />
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BlogItem;