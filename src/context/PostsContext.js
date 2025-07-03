import React, { createContext, useEffect, useReducer } from 'react';

export const PostsContext = createContext();

const initialState = {
  allPosts: [],
  page: 1,
  perPage: 6,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, allPosts: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'REMOVE_POST': {
      const updated = state.allPosts.filter((post) => post.id !== action.payload);
      return { ...state, allPosts: updated };
    }
    default:
      return state;
  }
}

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        dispatch({ type: 'SET_POSTS', payload: data });
      } catch (e) {
        console.error(e);
      }
    }
    fetchPosts();
  }, []);

  const value = { state, dispatch };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export default PostsProvider;
