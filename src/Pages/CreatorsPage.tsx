import React, { useState, useEffect } from 'react';
import Creator from '../Components/Creator';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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

interface CreatorProps {
  creatorPrId: string;
  nickname: string;
  comment: string;
  category1: string;
  category2: string;
  photo: string;
  insta: string;
  tictok: string;
  youtube: string;
  selectedOption: string;
}

export default function CreatorsPage({ hasNav = true }: { hasNav?: boolean }) {
  const [profiles, setProfiles] = useState<CreatorProps[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.125.179.40:8080/creator-pr');
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
        } else {
          console.error('에러: 받은 데이터가 배열이 아님');
        }
      } catch (error) {
        console.error('프로필 가져오기 에러:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <CreatorsContainer>
      <Header />
      <Title>크리에이터 PR</Title>
      <Button>
        <Link to="/editPr" style={{ color: '#fff' }}>
          작성하기
        </Link>
      </Button>
      {hasNav && (
        <div className="post__nav">
          <div
            role="presentation"
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'post__nav--active' : ''}
          >
            ALL
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab('my')}
            className={activeTab === 'my' ? 'post__nav--active' : ''}
          >
            MY PR
          </div>
        </div>
      )}
      <InnerContainer>
        {Array.isArray(profiles) ? (
          profiles.map((profile, index) => (
            <Creator
              key={index}
              memberId={profile.creatorPrId}
              nickname={profile.nickname}
              comment={profile.comment}
              category={profile.category1}
              insta={profile.insta}
              tictok={profile.tictok}
              youtube={profile.youtube}
              photo={profile.photo}
              selectedOption={profile.selectedOption}
            />
          ))
        ) : (
          <p>에러: 프로필을 표시할 수 없음</p>
        )}
      </InnerContainer>
      <Footer />
    </CreatorsContainer>
  );
}
