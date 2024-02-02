import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Profile() {
  const Sns = styled.div`
    margin-top: 10px;
    display: flex;

    li {
      margin-right: 20px;
    }

    img {
      width: 40px;
      height: 35px;
      margin-right: 5px;
    }

    span {
      font-weight: 600;
      color: #fff;
    }
  `;

  const Button = styled.button`
    min-width: 10vw;
    min-height: 6vh;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #fb7b6a;
    border: none;
    margin-left:15vw;
    margin-top: 8vh; 

    &:hover {
      background-color: #e36757;
    }
    @media (max-width: 768px) {
      font-size: 1rem; 
    }
  `;

  const ProfileBox = styled.div`
    background-color: #7f95a5;
    align-items: center;
    max-width: 60vw;
    height: 25vh;
    border-radius: 25px;
    margin: 0 auto;
    display: flex;
    padding: 30px;
    margin-bottom:40vh;
    margin-top:10vh;
  `;

  const ProfileImg = styled.div`
    width: 150px;
    height: 150px;
    background-color: #ccc;
    margin: 30px;
  `;

  const ProfileDetail = styled.div`
    display: flex;
    flex-direction: column; 

    p {
      font-size:1.3rem;
    }
    @media (max-width: 800px) {
      font-size: 0.7rem; 
    }

  `;

  return (
    <div>
      <ProfileBox>
        <ProfileImg />
        <ProfileDetail>
          <div style={{ color: 'black', fontSize: '2rem', fontWeight: '600' }}>메리기타</div>
          <p>백만 틱톡커 메리기타입니다.</p>
          <span>merry45422@naver.com</span>
          <Sns>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="유튜브" />
              {/* <span>1천</span> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/tictok.png'} alt="틱톡" />
              {/* <span>2만</span> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="인스타" />
              {/* <span>3만</span> */}
            </li>
          </Sns>
        </ProfileDetail>
        <Button>
          <Link to='/editprofile' style={{ color: '#fff' }}>프로필 수정</Link>
        </Button>
      </ProfileBox>
    </div>
  );
}
