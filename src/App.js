import React from 'react';
import { BlogProvider } from './context/BlogContext';
import BlogList from './components/BlogList';
import BlogModal from './components/BlogModal';

function App() {
  return (
    <BlogProvider>
      <div>
        <h1>Blog Website</h1>
        <BlogList />
        <BlogModal />
      </div>
    </BlogProvider>
  );
}

export default App;