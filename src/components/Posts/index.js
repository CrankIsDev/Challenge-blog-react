// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == import : local
import './posts.scss';
import Post from './Post';

// == Composant
const Posts = ({ posts }) => (
  <main className="posts">
    {posts.map((post) => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Posts;