import { useState } from "react";
import { validateEmail, validateNickname, validatePassword, validatePasswordConfirm } from "./validate";

//커스텀 훅(회원가입 폼 로직)
const useSinupForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    passConfirm: '',
    nick: '',
  });
  const [errors, setErrors] = useState({});

  const validate=(name, value)=>{
    switch (name) {
      case 'email': return validateEmail(value);
      case 'pass': return validatePassword(value);
      case 'passConfirm': return validatePasswordConfirm(value, formData.pass);
      case 'nick': return validateNickname(value);
      default: return '유효한 값이 아니네요'
    }
  }

  //입력을 완료하면 유효성검사를 실시하고 실패시 에러메세지를 저장
  const handleBlur = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    //const error=validate(name, value);
    setErrors({ ...errors, [name]: validate(name, value) });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //useSinupForm사용시 외부파일에서 접근하도록
  return { formData, errors, handleBlur, handleChange }
}
export default useSinupForm;

