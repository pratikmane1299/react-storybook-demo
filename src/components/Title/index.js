import React from 'react';
import PropTypes from 'prop-types';

import './title.css'

export const Title = ({ children }) => {
  return (
    <h1>{children}</h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};
