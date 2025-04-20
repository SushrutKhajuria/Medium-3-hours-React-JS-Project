import React from 'react';
import { BlogProvider } from './context/BlogContext';
import BlogList from './components/BlogList';
import BlogModal from './components/BlogModal';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <div className="app">
        <header className="app-header">
          <h1>Blog Website</h1>
        </header>
        <BlogList />
        <BlogModal />
      </div>
    </BlogProvider>
  );
}

export default App;