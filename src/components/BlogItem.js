import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const BlogItem = ({ blog }) => {
  const { setCurrentBlog, setIsModalOpen, deleteBlog } = useContext(BlogContext);

  const handleEdit = () => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div className="blog-item">
      <img src={blog.imageUrl} alt={blog.title} />
      <div className="blog-item-content">
        <h3>{blog.title}</h3>
        <div className="blog-item-actions">
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteBlog(blog.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;