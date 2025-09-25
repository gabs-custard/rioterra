import React from 'react';

const Card = ({ children, className = '' }) => {
  const classes = ['rounded-2xl', className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};

export default Card;
