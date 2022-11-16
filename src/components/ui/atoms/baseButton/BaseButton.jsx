import React from 'react';
import '../../../../styles/common/_base-button.scss';

function BaseButton({
  className = '',
  variant = 'primary',
  children,
  icon,
  ...props
}) {
  return (
    <button className={`base-button--${variant} ${className}`} {...props}>
      {children}
      {icon ? (
        <span className="base-button__icon">
          <img src={icon} alt="icon" />
        </span>
      ) : null}
    </button>
  );
}

export default BaseButton;
