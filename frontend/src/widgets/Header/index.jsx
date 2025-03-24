import { Link } from 'react-router-dom';
import './Header.css'
const Header=()=>{
  return (<>
    <h1>헤더</h1>
    <div>
      <Link to={'/'} >HOME</Link>
      <Link to={'/post'} >POST</Link>
      <Link to={'/login'} >로그인</Link>
      <Link to={'/signup'} >회원가입</Link>
    </div>
  </>)
}

export default Header;