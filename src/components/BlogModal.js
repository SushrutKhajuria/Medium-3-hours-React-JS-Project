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
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{currentBlog ? 'Edit Blog' : 'New Blog'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-success"
            >
              {currentBlog ? 'Update' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default BlogModal;