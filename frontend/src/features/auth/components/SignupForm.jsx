
import React from 'react';
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import '../ui/AuthForm.css'
import { Mail, Lock,LockKeyhole,Tag } from 'lucide-react';

const SignupForm = () => {
  return (<>
    <h1>회원가입</h1>
    <form className='signup-form auth-form'>
      <dl>
        <dt className='sr-only'><label>이메일</label></dt>
        <dd><Input icon={<Mail stroke='#999' size={16} />} name="email" placeholder="이메일"  /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd><Input icon={<Lock stroke='#999' size={16} />} type="password" name="pass" placeholder="비밀번호" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호 확인</label></dt>
        <dd><Input icon={<LockKeyhole stroke='#999' size={16} />} type="password" name="pass-confirm" placeholder="비밀번호 확인" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>닉네임</label></dt>
        <dd><Input icon={<Tag stroke='#999' size={16} />} name="nick" placeholder="닉네임" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>회원가입버튼</label></dt>
        <dd>
          <Button type="submit" text="회원가입" fullWidth={true} />
        </dd>
      </dl>
    </form>
  </>)
}

export default SignupForm;