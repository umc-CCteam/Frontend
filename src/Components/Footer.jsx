import React from 'react';
import '../reset.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContain = styled.div`
  display:flex;
  height:50px;
  align-items:center;
  justify-content : center;
  font-size: 16px;
  color: #fff;
  padding:30px;
  margin: 10px;
  background-color:"#121c2e"
`;

const FooterLink = styled(Link)`
  color: inherit;
  margin-right:3vw;
  margin-left:3vw;
`;

export default function Footer() {
  return (
    <FooterContain>
      <FooterLink to='/about'>
        About us
      </FooterLink>
      <FooterLink to='/help'>
        Help
      </FooterLink>
    </FooterContain>
  );
}
