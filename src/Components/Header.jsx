/*eslint-disable */

import React from 'react';
import  '../reset.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Pages/Login';

const HeaderContainer = styled.div`
`;
const HeaderTopLink = styled(Link)`
  padding: 1px;
  margin: 4vh 6vh 0 0;

`;

const HeaderTop = styled.div`
width:100%;
height:80px;

  ul {
    display: flex;
    justify-content: flex-end;
    padding-left:5vh;
  }

  li {
    padding: 1px;
    margin: 7vh 6vh 0 0; 
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:5vh;
  align-items:center;
  font-size: 1.2rem;
  font-weight:500;
  font-color:#FFF;
  @media (max-width: 768px) {
    text-align:center;

    ul {
      padding-right: 0;
      margin-top: 5vh;
      justify-content: flex-end;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    color: #fff;
    padding-right: 13vh;

    @media (max-width: 768px) {
      padding-right: 10px;
      justify-content: center;
      font-size: 1rem;
    }
  }

  li {
    margin-left: 5vh;
  }
 

    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 1vh;
      padding-right: 10px;
    }
  }

  img {
    width: 30vh;
    height: 25vh;

    @media (max-width: 768px) {
      width: 20vh;
      height: 15vh;
    }
  }
`;

const HeaderNavItem = styled(Link)`
&:hover {
    color: #FB7B6A;
}
color: inherit;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTop>
        <ul>
          <li>
            <Link to='/login'>로그인</Link>
          </li>
          <li>
            <Link to='/profile'>
              프로필
            </Link>
          </li>
        </ul>
      </HeaderTop>
      <HeaderBottom>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="로고" />
        </Link>
        <ul>
          <li>
            <HeaderNavItem to='/pr'>
              Creator PR
            </HeaderNavItem>
          </li>
          <li>
            <HeaderNavItem to='/community'>
              Community
            </HeaderNavItem>
          </li>
          <li>
            <HeaderNavItem to='/promentoring'>
              Promentoring
            </HeaderNavItem>
          </li>
        </ul>
      </HeaderBottom>
    </HeaderContainer>
  );
}
