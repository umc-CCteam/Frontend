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
const Input2 = styled.input`
  width: 100px;
  height: 5vh;
  margin-bottom: 2vh;
  padding: 5px;
  font-size:15px;
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
    youtube: "",
    tictok: "",
    insta: "",
    category1: "",
    category2:""
  });

  const [selectedFile, setSelectedFile] = useState(null);

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
    setPr((prevPr) => ({
      ...prevPr,
      category: selectedValue
    }));
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);
      formData.append('nickname', pr.nickname);
      formData.append('comment', pr.comment);
      formData.append('email', pr.email);
      formData.append('youtube', pr.youtube);
      formData.append('tictok', pr.tictok);
      formData.append('insta', pr.insta);
      formData.append('category1', pr.category1);
      formData.append('category2', pr.category2);

      const response = await axios.post('http://13.125.179.40:8080/creator-pr/new/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Data sent successfully:', response.data.result);
    } catch (error) {
      console.error('Error sending data:', error);
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
          type="text"
          name="email"
          value={pr.email}
          onChange={handleInputChange}
          placeholder="이메일을 입력해주세요"
        />

        {/* 드롭다운버튼 */}
          <h4 style={{color:"#fff",fontSize:"1.3rem"}}>Category</h4>
          <Dropdown1 onChange={handleDropdownChange} />
          
        {/* sns */}
          <h4 style={{color:"#fff",fontSize:"1.3rem",marginTop:"10px"}}>SNS</h4>
          <Sns>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/youtube.png"}
                alt="유튜브"
              />
            <Input2
              type="text"
              name="yutube"
              value={pr.youtube}
              onChange={handleInputChange}
              placeholder="yutube 구독자수"
            />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tictok.png"}
                alt="틱톡"
              />
            <Input2
              type="text"
              name="tictok"
              value={pr.tictok}
              onChange={handleInputChange}
              placeholder="tictok 팔로워수"
            />
            </li>

            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/insta.png"}
                alt="인스타"
              />
            <Input2
              type="text"
              name="insta"
              value={pr.insta}
              onChange={handleInputChange}
              placeholder="insta 팔로워수"
            />
            </li>
          </Sns>
        </ProfileDetail>
    </ProfileBox>
  )
}
