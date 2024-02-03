import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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
  background-color: #fb7b6a;
  border: none;
  flex-direction: row-reverse;
  margin-top: 8vh;

  &:hover {
    background-color: #e36757;
  }
  @media (max-width: 768px) {
    min-width: 13vw;
    min-height: 4vh;
    font-size: 1rem;
    margin-bottom:-25px;
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
  padding: 20px;
  margin-top: 8vh;
  margin-bottom: 40vh;

  @media (max-width: 700px) {
    width: 500px;
    height: 180px;
    padding:3px;
  }
`;

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  margin: 30px;
  font-size:13rem;
  text-align:center;
  justify-content:center;

  @media (max-width: 700px) {
    width: 140px;
    height: 140px;
    font-size:130px;
  }
`;

const ProfileDetail = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  font-size:1.6rem;

   h4{
    font-size:2.5rem;
    margin-bottom:40px;
   }

  @media (max-width: 700px) {
    width: 200px;
    height: 140px;
    font-size:1.3rem;
    h4{
      font-size:1.8rem;
      margin-bottom:10px;
     }
  }
`;


const Input = styled.input`
  width: 400px;
  height:80px;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 700px) {
    width:80%;
    margin-bottom: 10px;
    padding: 5px;
  }
`;


export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // 페이지가 로드될 때 프로필 정보를 가져와서 상태에 설정
    const fetchData = async () => {
      try {
        const fetchedProfile = await axios.get('API_ENDPOINT/profile');
        setProfile(fetchedProfile.data);
      } catch (error) {
        // 에러 처리
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    // 폼 입력이 변경될 때 호출되는 함수
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      // 프로필 수정 요청 보내기
      const updatedData = await axios.put('API_ENDPOINT/profile', profile);
      console.log('Profile updated successfully:', updatedData);

      // 프로필 수정이 완료되면 프로필 페이지로 이동
      navigate.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ProfileBox>
        <ProfileImg>+</ProfileImg>
      <ProfileDetail>
        <Input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          placeholder="이름을 입력해 주세요."
        />
        <Input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해 주세요"
        />
        <Input
          type="text"
          name="comment"
          value={profile.comment}
          onChange={handleInputChange}
          placeholder="한줄 소개를 입력해 주세요."
        />
          <Sns>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="유튜브" />
              {/* <span>{profileData.youtubeFollowers} 팔로워</span> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/tictok.png'} alt="틱톡" />
              {/* <span>{profileData.tiktokFollowers} 팔로워</span> */}
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="인스타" />
              {/* <span>{profileData.instagramFollowers} 팔로워</span> */}
            </li>
          </Sns>        
      </ProfileDetail>
      <Button>
          <Link to='/profile' style={{ color: '#fff' }}>확인</Link>
      </Button>
    </ProfileBox>
  );
};

