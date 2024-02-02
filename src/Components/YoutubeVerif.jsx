import React from 'react'
import '../verify.css'


export default function YoutubeVerif() {
  return (
    <div className='VerifyContainer'>
        <img className='youtubeImg' src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="YouTube" />
        <button className='VerifyButton' >구글 계정 인증하기</button>
    </div>
  )
}
