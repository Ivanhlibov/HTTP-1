// components/Button.js
import React from 'react';

const Button = ({ onLoadMore }) => (
  <button type="button" className="button" onClick={onLoadMore}>
    Load more
  </button>
);

export default Button;
