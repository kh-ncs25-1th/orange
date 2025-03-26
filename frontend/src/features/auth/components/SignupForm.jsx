
import React, { useState } from 'react';
import Input from "@shared/ui/Input"
import Button from "@shared/ui/Button"
import '../ui/AuthForm.css'
import { Mail, Lock, LockKeyhole, Tag } from 'lucide-react';

const SignupForm = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    nick: '',
  });
  const [errors, setErrors] = useState({});
 
  // 유효성 검사 함수
  const validate = (name, value) => {
    console.log("유효성 검사 함수");
    switch (name) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : '유효한 이메일 주소를 입력하세요.';
      case 'pass':
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%/])[A-Za-z\d!@#$%/]{12,}$/.test(value)
          ? ''
          : '대문자, 소문자, 특수문자, 숫자 포함 12자 이상';
      case 'passConfirm':
        return formData.pass?(value === formData.pass ? '' : '비밀번호가 일치하지 않습니다.'):'비밀번호를 먼저 입력 하여야 합니다.';
      case 'nick':
        return value?(value.length >= 2 ? '나중에 중복체크해야해요' : '닉네임은 2자 이상이어야 합니다.'):'';
      default:
        return '';
    }
  };
  const handleBlur=(e)=>{
    console.log(e.target)
    const {name, value} = e.target;
    const error = validate(name, value);

    console.log(name,":",value);

    setErrors({...errors,[name]:error});
  }
  const handleChange=(e)=>{
    const {name, value} = e.target;
    if(name==="passConfirm")return;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit=()=>{
    console.log(formData);
  }

  return (<>
    <h1>회원가입</h1>
    <form onSubmit={handleSubmit} className='signup-form auth-form'>
      <dl>
        <dt className='sr-only'><label>이메일</label></dt>
        <dd>
          <Input
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            onBlur={handleBlur}
            guide={'이메일을 입력하세요'}
            icon={<Mail stroke='#999' size={16} />} name="email" placeholder="이메일" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호</label></dt>
        <dd>
          <Input
            value={formData.pass}
            onChange={handleChange}
            error={errors.pass}
            onBlur={handleBlur}
            guide={'대문자,소문자,특수문자(!@#$%/),숫자 필수조합 12자 이상'}
            icon={<Lock stroke='#999' size={16} />} type="password" name="pass" placeholder="비밀번호" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>비밀번호 확인</label></dt>
        <dd>
          <Input
            value={formData.passConfirm}
            onChange={handleChange}
            error={errors.passConfirm}
            onBlur={handleBlur}
            guide={'비밀번호를 다시 한번 더 입력하세요'}
            icon={<LockKeyhole stroke='#999' size={16} />} type="password" name="passConfirm" placeholder="비밀번호 확인" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>[선택]닉네임</label></dt>
        <dd>
          <Input
            value={formData.nick}
            onChange={handleChange}
            error={errors.nick}
            onBlur={handleBlur}
            guide={'[선택]닉네임은 2글자 이상 입력하세요'}
            icon={<Tag stroke='#999' size={16} />} name="nick" placeholder="닉네임" /></dd>
      </dl>
      <dl>
        <dt className='sr-only'><label>회원가입버튼</label></dt>
        <dd>
          <Button type="submit"  text="회원가입" fullWidth={true} />
        </dd>
      </dl>
    </form>
  </>)
}

export default SignupForm;