import React, { useState } from 'react';
import './Input.css'

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onClick,
  error,
  showErrorMessage = true, // 에러 메시지 표시 여부
  errorClassName = 'input-error' // 커스터마이징 가능
}) => {
  const errorClass = error ? errorClassName : '';

  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        className={`input ${errorClass}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {error && showErrorMessage && (
        <div className={errorClassName}>{error}</div>
      )}
    </div>
  );
};

export default Input;