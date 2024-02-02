/*eslint-disable*/

import React from 'react';
import Header from '../Components/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  '../reset.css';
import Footer from '../Components/Footer';
import TypeIt from "typeit-react";

const Maincontainer = styled.div`
  text-align: center;
  line-height: 1.2;
  background-image:url('/images/Rectangle.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  justify-content: center;

  h1 {
    color: #ccc;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom:10vh;

    @media (max-width: 768px) {
      padding-right: 0;
      justify-content: center;
      font-size: 1.8rem;
    }
  }

  span {
    color: #FB7B6A;
    font-weight: 700;
  }

  .mainBox {
    li {
      padding-bottom: 10vh;
    }
  }
`;

const MainImageContainer = styled.div`
  position: relative;

  &:hover {
    filter: brightness(70%); 
  }
`;

const MainImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  box-shadow:rgba(0, 0, 0, 0.9);
  margin-left:-30px;

`;

export default function Main() {
  return (
    <Maincontainer>
      <Header />
      <div>
        <h1>
          하고 싶던 모든 것, <br />
          <TypeIt
        options={{
          strings: ["Creative Connect"],
          speed: 200,
          waitUntilVisible: true,
          loop: true,
        }}
      />  와 함께!<br />
        </h1>

      </div>

      <div className='mainBox'>
        <ul>
          <li>
            <Link to='/community'>
              <MainImageContainer>
                <MainImage src={process.env.PUBLIC_URL + '/images/main1.png'} alt="메인이미지1" />
              </MainImageContainer>
            </Link>
          </li>
          <li>
            <Link to='/pr'>
            <MainImageContainer>
              <MainImage src={process.env.PUBLIC_URL + '/images/main2.png'} alt="메인이미지2" />
              </MainImageContainer>
            </Link>
          </li>
          <li>
            <Link to='/promentoring'>
            <MainImageContainer>
              <MainImage src={process.env.PUBLIC_URL + '/images/main3.png'} alt="메인이미지3" />
              </MainImageContainer>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </Maincontainer>
  );
}






