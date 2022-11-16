import React from 'react';
import '../../../../styles/common/_base-input.scss';

export default function BaseInput({ className = '', label, ...props }) {
  return (
      <div className={`base-input ${className}`}>
        <input
          className="base-input__space"
          autoComplete="off"
          placeholder=' '
          required
          spellCheck="false"
          {...props}
        />
        <span className="label">{label}</span>
      </div>
  );
}
