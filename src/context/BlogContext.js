import { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const saveBlog = (blog) => {
    if (currentBlog) {
      setBlogs(blogs.map(b => b.id === currentBlog.id ? blog : b));
    } else {
      setBlogs([...blogs, { ...blog, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setCurrentBlog(null);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <BlogContext.Provider 
      value={{ blogs, isModalOpen, setIsModalOpen, currentBlog, setCurrentBlog, saveBlog, deleteBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};