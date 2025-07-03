import React, { useContext, useMemo } from 'react';
import { PostsContext } from '../context/PostsContext';
import PostCard from './PostCard';
import Pagination from './Pagination';
import './PostsList.css';

const PostsList = () => {
  const {
    state: { allPosts, page, perPage },
    dispatch,
  } = useContext(PostsContext);

  const maxPage = Math.ceil(allPosts.length / perPage);

  const currentPosts = useMemo(() => {
    const start = (page - 1) * perPage;
    return allPosts.slice(start, start + perPage);
  }, [allPosts, page, perPage]);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_POST', payload: id });
  };

  const handlePageChange = (newPage) => {
    dispatch({ type: 'SET_PAGE', payload: newPage });
  };

  return (
    <div className="posts-list-container">
      <div className="cards-wrapper">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} onRemove={() => handleRemove(post.id)} />
        ))}
      </div>
      <Pagination current={page} total={maxPage} onChange={handlePageChange} />
    </div>
  );
};

export default PostsList;
