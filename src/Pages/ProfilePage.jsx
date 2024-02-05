import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Profile from '../Components/Profile'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import CreatorDetail from '../Components/CreatorDetail';

export default function ProfilePage() {

  const ProfileContainer = styled.div`
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


  return (
    <ProfileContainer>
    <Header />
    <h3>My 프로필</h3>
    <Profile />
    <CreatorDetail />
    <Footer />
    </ProfileContainer>
  )
}
