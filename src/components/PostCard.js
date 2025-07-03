import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import './PostCard.css';

const PostCard = ({ post, onRemove }) => {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <h3>{post.title}</h3>
        <FaTimesCircle className="remove-icon" onClick={onRemove} title="Remove card" />
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
