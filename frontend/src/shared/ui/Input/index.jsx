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
  errorClassName = 'input-error', // 커스터마이징 가능
  icon,
}) => {
  const errorClass = error ? errorClassName : '';

  return (
    <div className="input-container">
      <div className='input-wrap'>
        {icon && <span className="input-icon">{icon}</span>} {/* 아이콘 추가 */}
        <input
          type={type}
          name={name}
          className={`input ${errorClass}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
      {error && showErrorMessage && (
        <div className={errorClassName}>{error}</div>
      )}
    </div>
  );
};

export default Input;