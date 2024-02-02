import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import YoutubeVerif from '../Components/YoutubeVerif'
import InstagramVerif from '../Components/InstagramVerif'
import '../reset.css'
import '../signup.css'


export default function Signup() {
  return (
    <div className='SignupContainer'>
      <Header/>
      <div className='SignupSubContainer'>

        <div className='SignupBox'>
          <span style={{fontSize: "xx-large", color: "white", fontWeight: "bolder", justifyContent: "flex-start", marginBottom:"50px"}}>회원가입</span>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className='InputBox'>
            <input className='signupInput' placeholder='아이디'/>
            <input className='signupInput' placeholder='비밀번호'/>
            <input className='signupInput' placeholder='비밀번호 확인'/>
            <input className='signupInput' placeholder='이메일'/>
            <button className='buttonStyle'>인증하기</button>
            <input className='signupInput' placeholder='인증번호 6자리'/>
            <button className='buttonStyle'>확인</button>
          </div>
          </div>
        </div>

        <div className='verifyBox'>
          <span style={{fontSize: "xx-large", color: "white", fontWeight: "bolder", justifyContent: "flex-start", marginBottom:"50px"}}>채널 인증(선택)</span>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className='VerifyButtonBox'>
            <YoutubeVerif style={{border:"1px solid white"}} /><br/>
            <InstagramVerif/>
          </div>
          </div>
        </div>

        <div style={{marginTop:"100px", marginBottom:"200px"}}>
          <button className='buttonStyle'>회원가입</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
