import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  @media (max-width: 768px) {
    img {
      width: 30px;
      height: 25px;
      margin-right: 5px;
    }
    width: 25px;
    height: 25px;
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
  font-weight: 800;
  background-color: #fb7b6a;
  border: none;
  flex-direction: row-reverse;
  margin-top: 10vh;

  &:hover {
    background-color: #e36757;
  }
  @media (max-width: 768px) {
    min-width: 13vw;
    min-height: 4vh;
    font-size: 1rem;
    margin-bottom: -25px;
  }
`;

const ProfileBox = styled.div`
  background-color: #7f95a5;
  align-items: center;
  width: 60vw;
  height: 25vh;
  border-radius: 25px;
  margin: 0 auto; 
  display: flex;
  margin-top: 8vh;
  margin-bottom: 40vh;

  @media (max-width: 700px) {
    width: 500px;
    height: 180px;
    padding: 3px;
  }
`;

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  margin: 30px;
  font-size: 13rem;
  font-weight:200;
  justify-content: center;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 700px) {
    width: 140px;
    height: 140px;
    font-size: 130px;
  }
`;

const ProfileDetail = styled.div`
  width: 600px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;

  h4 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    width: 200px;
    height: 140px;
    font-size: 1.3rem;
    h4 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
  }
`;

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    comment: '',
    profileImage: '', 
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        //API 호출
        const response = await axios.get('API_ENDPOINT/profile');

        // API 응답에서 필요한 데이터 추출하여 상태 업데이트
        const apiData = response.data;
        setProfileData({
          name: apiData.name,
          email: apiData.email,
          comment: apiData.comment,
          profileImage: apiData.profileImage, 
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    // 페이지가 로드될 때와 컴포넌트가 업데이트 될 때마다 실행
    fetchProfileData();
  }, []); // 빈 배열을 넘겨주면 컴포넌트가 처음 마운트 될 때만 실행

  return (
    <div>
      <ProfileBox>
        <ProfileImg>
          {profileData.profileImage ? (
            <img src={profileData.profileImage} alt="프로필 이미지" />
          ) : (
            '+'
          )}
        </ProfileImg>
        <ProfileDetail>
          <h4>{profileData.name}</h4>
          <span>{profileData.email}</span>
          <p>{profileData.comment}</p>
          <Sns>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="유튜브" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/tictok.png'} alt="틱톡" />
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="인스타" />
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
