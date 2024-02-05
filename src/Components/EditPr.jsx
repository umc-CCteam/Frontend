/*eslint-disable*/

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown1 from './Dropdown1';
import Creator from '../Components/Creator';

const Sns = styled.div`
  display: flex;
  margin-top:-20px;

  li {
    margin-right: 20px;
  }

  img {
    width: 30px;
    height: 25px;
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
  width: 60vw;
  height: 45vh;
  border-radius: 25px;
  margin: 0 auto;
  display: flex;
  margin-top: 8vh;
  margin-bottom: 15vh;

  h4{
    font-size:0.7rem;
    color:#fff;
  }

  @media (max-width: 700px) {
    width: 500px;
    height: 180px;
    padding: 3px;
  }
`;

const ProfileImg = styled.div`
  width: 24vw;
  height: 45vh;
  background-color: #ccc;
  font-size: 16rem;
  color:#fff;
  justify-content: center;
  display: flex;
  align-items: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  font-weight:200;

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
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:3vw;

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
  width: 20vw;
  height: 5vh;
  margin-bottom: 2vh;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 80%;
    margin-bottom: 10px;
    padding: 5px;
  }
`;

const FileInput = styled.input`
  display: none;
`;


export default function EditPr() {
  const [pr, setPr] = useState({
    nickname: "",
    comment: "",
    email: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState(""); // 추가된 부분
  const [selectedOption, setSelectedOption] = useState("default"); // 초기값은 드롭다운의 기본 옵션에 해당하는 값으로 설정

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProfile = await axios.get('API_ENDPOINT/pr');
        setPr(fetchedProfile.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPr((prevPr) => ({
      ...prevPr,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDropdownChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };


  const handleUpdatePr = async () => {
    try {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);
      formData.append('category', category); // 추가된 부분

      const uploadImageResponse = await axios.post('http://13.125.179.40:8080/creator-pr/new/1', formData);

      const updatedPr = {
        ...pr,
        profileImage: uploadImageResponse.data.filePath,
      };

      const updateProfileResponse = await axios.post('http://13.125.179.40:8080/creator-pr/new/1', updatedPr);
      console.log('Pr updated successfully:', updateProfileResponse);

      navigate.push('/pr'); // 수정 완료되면 pr 페이지로 이동
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
          name="nickname"
          value={pr.nickname}
          onChange={handleInputChange}
          placeholder="활동명을 입력해주세요."
        />
        <Input
          type="text"
          name="comment"
          value={pr.comment}
          onChange={handleInputChange}
          placeholder="한줄 소개를 입력해주세요."
        />
        <Input
          type="email"
          name="email"
          value={pr.email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />

        {/* 드롭다운버튼 */}
          <h4 style={{color:"#fff",fontSize:"1.3rem"}}>Category</h4>
          <Dropdown1 onChange={handleDropdownChange} />
          {/* Creator 컴포넌트에 선택한 옵션 전달 */}
          {/* <Creator selectedOption={selectedOption} /> */}
        {/* sns */}
          <h4 style={{color:"#fff",fontSize:"1.3rem",marginTop:"10px"}}>SNS</h4>
          <Sns>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/youtube.png"}
                alt="유튜브"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tictok.png"}
                alt="틱톡"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/insta.png"}
                alt="인스타"
              />
              <span>6만</span>
            </li>
          </Sns>
        </ProfileDetail>
    </ProfileBox>
  )
}
