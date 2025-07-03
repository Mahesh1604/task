import React from 'react';
import './Pagination.css';

const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="pagination-wrapper">
      <button disabled={current === 1} onClick={() => onChange(current - 1)}>
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={p === current ? 'active' : ''}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={current === total} onClick={() => onChange(current + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
