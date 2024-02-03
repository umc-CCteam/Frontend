import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import InstagramVerif from '../Components/InstagramVerif';
import YoutubeVerif from '../Components/YoutubeVerif';
import { updateProfile } from '../profileService';
import { fetchProfile } from '../profileService';
import EditProfile from '../Components/EditProfile';


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

`;

const VerifyBox = styled.div`
  width: 60vw;
  height: 40vh;
  background-color: #1f2838;
  margin: 0 auto;
  align-items: center;
  border-radius: 20px;
  margin-top:-20vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerifyButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function EditProfilePage(){

  return (
    <EditProfileContainer>
      <Header />
      <h3>프로필 수정</h3>
      <EditProfile />
      <VerifyBox>
          <VerifyButtonBox>
            <YoutubeVerif />
            <br />
            <InstagramVerif />
          </VerifyButtonBox>
        </VerifyBox>
      <Footer />

    </EditProfileContainer>
  );
};

