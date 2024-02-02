import React from 'react'
import '../verify.css'


export default function InstagramVerif() {
  return (
    <div className='VerifyContainer'>
        <img className='instaImg' src={process.env.PUBLIC_URL + '/images/insta.png'} alt="Instagram" />
        <button className='VerifyButton' >인스타그램 계정 인증하기</button>
    </div>
  )
}
