import { Link } from 'react-router-dom';
import './Header.css'
import Input from '../../shared/ui/Input';
const Header=()=>{
  return (<>
    <header className='header' >
      <h1>헤더</h1>
      <div className='header-container'>
        <section>
          <h1>로고</h1>
          <div className='flex ai-center'>
            <Link to={'/'}  className='header-logo'>ORANGE</Link>
            <div>
              <label className='sr-only'>검색</label>
              <Input placeholder='검색어를 입력하세요'/>
            </div>
          </div>
        </section>
        <nav>
          <h1>메인메뉴</h1>
          <div>
            <ul className='flex'>
              <li>
                <Link to={'/post'} >POST</Link>
              </li>
              <li>
                <Link to={'/'} >임시메뉴</Link>
              </li>
              <li>
                <Link to={'/login'} >로그인</Link>
              </li>
              <li>
                <Link to={'/signup'} >회원가입</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </>)
}

export default Header;