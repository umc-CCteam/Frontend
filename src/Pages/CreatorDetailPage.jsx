/*eslint-disable*/

import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeVideoList from "../Components/YoutubeVideoList";
import { dummy } from "../PrDummy";
import YoutubeEmbed from "../Components/YoutubeEmbed";
import CreatorDetail from "../Components/CreatorDetail";
import { Card } from "react-bootstrap";  

const CreatorContainer = styled.div`
  background-color: #121c2e;

  h3 {
    color: #fff;
    font-weight: 700;
    margin-left: 10vw;
    margin-top: 4vh;
    font-size: 40px;
  }
`;


const Separator = styled.hr`
  width: 70%;
  height: 1px;
  border: none;
  background-color: #ccc;
  margin: 12vh auto;
`;

const PRBox = styled.div`
  width: 800px;
  margin: 15vh auto;
  text-align: center; 
`;

const VideoContainer = styled.div`
  margin-top: 20vh;
  width: 80vw;
  margin: 0 auto;
`;





export default function CreatorDetailPage() {
  const { state } = useLocation();

    // state 또는 state.photo가 존재하는지 확인.
    // if (!state || !state.photo) {
    //     return <div>프로필 정보를 찾을 수 없습니다.</div>;
    //   }

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <CreatorContainer>
      <Header />
      <h3>크리에이터 PR</h3>
      <CreatorDetail />

      <Separator />

        <h3>PR</h3>
        <PRBox>
        {/* <Card.Text style={{ color: "#fff" }}>{state.instroction}</Card.Text> */}
      </PRBox>

      <VideoContainer>
        {/* <Slider {...sliderSettings}>
          {state.youtubeVideos.map((videoId, index) => (
            <div key={index}>
              <YoutubeEmbed videoId={videoId} />
            </div>
          ))}
        </Slider> */}
      </VideoContainer>
      <Footer />
    </CreatorContainer>
  );
}
