import React from 'react';
import Creator from '../Components/Creator';
import { dummy } from '../PrDummy';
import Header from '../Components/Header';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const CreatorsContainer = styled.div`
  background-color: #121c2e;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: #fff;
  font-weight: 700;
  margin-left: 10vw;
  margin-top: 4vh;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
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
  margin: 0 0 0 80vw;
  background-color: #fb7b6a;
  border: none;

  &:hover {
    background-color: #e36757;
  }

  @media (max-width: 768px) {
    width: 17vw;
    height: 6vh;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;


export default function Creators() {
  const { profile } = dummy;

  return (
    <CreatorsContainer>
      <Header />
      <Title>크리에이터 PR</Title>
      <Button>
        <Link to="/editPr" style={{ color: '#fff' }}>
          작성하기
        </Link>
      </Button>
      <InnerContainer>
        {profile.map((user, index) => (
          <Creator
            key={index}
            name={user.name}
            title={user.title}
            category={user.category}
            email={user.email}
            insta={user.insta}
            tictok={user.tictok}
            youtube={user.youtube}
            photo={user.photo}
            youtubeVideos={user.youtubeVideos}
          />
        ))}
      </InnerContainer>
      <Footer />
    </CreatorsContainer>
  );
}
