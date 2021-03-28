import React from 'react';
import PropTypes from 'prop-types';

import './post.css';

function Post({ post: { title, body, isFavourite } }) {
  return (
    <div className={`post ${ isFavourite ? 'post__favourite' : null}`}>
      <div className="post_content_wrapper">
        <h3 className="post__title">{title}</h3>
        <span className="post__body">{body}</span>
      </div>
      <div className="post__action">
        <a>
          <span className="icon-star"></span>
        </a>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  }),
};

export default Post;