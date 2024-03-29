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
  padding: 20px;
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
  text-align:center;
  align-items: center;

  &:hover {
    background-color: #B2B2B2;
  }

  @media (max-width: 700px) {
    width: 140px;
    height: 140px;
    font-size: 130px;
  }
`;

const ProfileDetail = styled.div`
  width: 600px;
  height: 200px;
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

const Input = styled.input`
  width: 400px;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size:15px;

  @media (max-width: 700px) {
    width: 80%;
    margin-bottom: 10px;
    padding: 5px;
  }
`;

const FileInput = styled.input`
  display: none;
`;


export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProfile = await axios.get('API_ENDPOINT/profile');
        setProfile(fetchedProfile.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);
      formData.append('name', profile.name);
      formData.append('email', profile.email);
      formData.append('comment', profile.comment);

      const uploadImageResponse = await axios.post('API_ENDPOINT/upload', formData);

      const updatedProfile = {
        ...profile,
        profileImage: uploadImageResponse.data.filePath,
      };

      // 프로필 수정 API 호출
      const updateProfileResponse = await axios.put('API_ENDPOINT/profile', updatedProfile);
      console.log('Profile updated successfully:', updateProfileResponse);

      // 수정 완료 후 프로필 페이지로 이동
      navigate('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ProfileBox>
      <ProfileImg onClick={() => document.querySelector('input[type="file"]').click()}>
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="프로필 이미지" />
        ) : (
          '+'
        )}
      </ProfileImg>
      <FileInput type="file" accept="image/*" onChange={handleFileChange} />
      <ProfileDetail>
        <Input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          placeholder="이름을 입력해주세요."
        />
        <Input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />
        <Input
          type="text"
          name="comment"
          value={profile.comment}
          onChange={handleInputChange}
          placeholder="한줄 소개를 입력해주세요."
        />
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
      <Button onClick={handleUpdateProfile}>
        <Link to="/profile" style={{ color: '#fff' }}>
          확인
        </Link>
      </Button>
    </ProfileBox>
  );
}
