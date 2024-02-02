/*eslint-disable*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import  '../reset.css';
import Footer from '../Components/Footer';
import '../Login.css'



export default function Login() {

  const navigate = useNavigate();

  const clickLoginBtn = () => {
    navigate('/')
  }

  const clickSignupBtn = () => {
    navigate('/signup')
  }

  return (
    <div className='LoginContainer'>
      <Link to='/'>
          <img className='logoimg' src={process.env.PUBLIC_URL + '/images/logo_nomargin.png'} alt="로고" />
      </Link>
      <div className='LoginBox'>
        <div style={{
          width: "auto",
          height: "70px",
          display: "flex",
          alignItems: "center",
          fontSize: "xx-large",
          fontWeight: "bolder"
          }}>
          로그인
        </div>
        <input className='LogInput' placeholder='아이디'/>
        <input className='LogInput' placeholder='비밀번호' type='password'/>
        <div> {/*로그인 실패시 문구 출력*/}
        </div>
        <button onClick={clickLoginBtn} className='LogInBtn'>로그인</button>
        <button onClick={clickSignupBtn} className='JoinBtn'>회원가입</button>
      </div>
      <Footer/>
    </div>
  )
}

