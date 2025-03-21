import React from 'react';
import './Button.css'

//jsx 함수로 태그를 만드는것
//Props : React 컴포넌트에 속성
//부모컴포넌트->자식컴포넌트에 전달할 때 사용
//읽기전용이므로 자식에서는 수정불가
//함수의 매개변수처럼 사용된다.
const Button=({
  text,
  variant='default',
  disabled=false
})=>{
  
  return (
    <button className={`btn btn-${variant}`} disabled={disabled} >{text}</button>
  )
}

export default Button;