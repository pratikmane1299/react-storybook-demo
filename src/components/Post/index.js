import React from 'react';
import PropTypes from 'prop-types';

import './post.css';

function Post({ post: { id, title, body, isFavourite }, onMarkFavourite }) {
  console.log(isFavourite);
  return (
    <div className={`post ${ isFavourite ? 'post__favourite' : undefined}`}>
      <div className="post_content_wrapper">
        <h3 className="post__title">{title}</h3>
        <span className="post__body">{body}</span>
      </div>
      <div className="post__action">
        <a onClick={() => onMarkFavourite(id)}>
          <span className="icon-star"></span>
        </a>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
  }),
  onMarkFavourite: PropTypes.func,
};

export default Post;