import React, { useEffect, useState } from 'react';
import PostsProvider from './context/PostsContext';
import PostsList from './components/PostsList';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PostsProvider>
      <div className="app-container">
        {!showContent ? (
          <div className="loading">Loading...</div>
        ) : (
          <PostsList />
        )}
      </div>
    </PostsProvider>
  );
}

export default App;
