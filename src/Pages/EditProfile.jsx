import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from '../Components/Profile';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InstagramVerif from '../Components/InstagramVerif';
import YoutubeVerif from '../Components/YoutubeVerif';
import { Link } from 'react-router-dom';
import { updateProfile } from '../profileService';
import { fetchProfile } from '../profileService';
import '../signup.css'

const EditProfileContainer = styled.div`
  background-color: #121c2e;
  color: #fff;
  padding: 20px;

  h3 {
    color: #fff;
    margin-left: 10vw;
    font-weight: 700;
    margin-top: 4vh;
    font-size: 40px;
  }

  .intro {
    width: 60vw;
    height: 40vh;
    margin: 0 auto;
    margin-top: -30vh;
  }

  h2 {
    padding: 10px;
    margin: 0 auto;
    color: #fff;
  }

  p {
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 12vw;
  height: 7vh;
  border-radius: 25px;
  color: #fff;
  text-align: center;
  align-items: center;
  font-size: 2rem;
  margin: 7vh 0 0 80vw;
  background-color: #fb7b6a;
  border: none;

  &:hover {
    background-color: #e36757;
  }
`;

const IntroBox = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 0 auto;
  margin-top: -30vh;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Form = styled.form`
  flex-direction: column;
  align-items: center;
`;

const VerifyBox = styled.div`
  width: 60vw;
  height: 40vh;
  background-color: #1f2838;
  margin: 0 auto;
  align-items: center;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerifyButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export default function EditProfile() {
  const [profile, setProfile] = useState({
    email: '',
    introduction: '',
    // ... (프로필 정보에 따라 필요한 속성 추가)
  });

  useEffect(() => {
    // 페이지가 로드될 때 프로필 정보를 가져와서 상태에 설정
    const fetchData = async () => {
      try {
        const fetchedProfile = await fetchProfile();
        setProfile(fetchedProfile);
      } catch (error) {
        // 에러 처리
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
      const updatedData = await updateProfile(profile);
      console.log('Profile updated successfully:', updatedData);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <EditProfileContainer>
      <Header />
      <h3>프로필 수정</h3>
      <Profile />
      <Form onSubmit={handleUpdateProfile}>
        <IntroBox>
          <h2>이메일</h2>
          <Input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
          <h2>한줄 소개</h2>
          <Input
            type="text"
            name="introduction"
            value={profile.introduction}
            onChange={handleInputChange}
          />
        </IntroBox>
        <VerifyBox>
          <VerifyButtonBox>
            <YoutubeVerif />
            <br />
            <InstagramVerif />
          </VerifyButtonBox>
        </VerifyBox>
        <Button type="submit">
          <Link to='/profile' style={{ color: '#fff' }}>확인</Link>
        </Button>
      </Form>
      <Footer />
    </EditProfileContainer>
  );
}
