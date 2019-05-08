import React from 'react';

const Button = ({ className, disabled, onClick, classIcon, buttonText }) => (
  <button
    className={className}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    <i className={classIcon}/>
    {buttonText}
  </button>
);

export default Button;
