import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BlogContext } from '../context/BlogContext';

const BlogModal = () => {
  const { isModalOpen, setIsModalOpen, currentBlog, saveBlog } = useContext(BlogContext);
  const [title, setTitle] = useState(currentBlog ? currentBlog.title : '');
  const [imageUrl, setImageUrl] = useState(currentBlog ? currentBlog.imageUrl : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveBlog({ title, imageUrl });
  };

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div>
      <div>
        <h2>{currentBlog ? 'Edit Blog' : 'New Blog'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit">{currentBlog ? 'Update' : 'Post'}</button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default BlogModal;