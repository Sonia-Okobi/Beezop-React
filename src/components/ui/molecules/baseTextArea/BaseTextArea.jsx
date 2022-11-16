import React from 'react';
import '../../../../styles/common/_base-input.scss';

export default function BaseTextArea({ className = '', label, ...props }) {
  return (
    <div className={`base-input ${className}`}>
      <textarea
        className={`base-input__space ${className}`}
        placeholder=" "
        autoComplete="off"
        required
        spellCheck="false"
        {...props}
      ></textarea>
      <span className="label">{label}</span>
    </div>
  );
}
