import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const colors = {
  primary: 'storybook-button--primary',
  secondary: 'storybook-button--secondary'
};

export const Button = ({ 
  color = 'primary',
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `${colors[color]}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  color: 'primary',
  onClick: undefined,
};
