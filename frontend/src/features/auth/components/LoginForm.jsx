import React from 'react';
import '../ui/AuthForm.css'
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"

const LoginForm=()=>{
  return (<>
    <h1>로그인페이지</h1>
    <form className='auth-form login-form'>
      <dl>
        <dt className='sr-only'><label>아이디</label></dt>
        <dd><Input placeholder="전화번호,사용자 이름 또는 이메일" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd><Input placeholder="비밀번호" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>로그인버튼</label></dt>
        <dd>
          <Button type="submit" text="로그인" fullWidth={true}/>
        </dd>
      </dl>
    </form>
  </>)
}
export default LoginForm;