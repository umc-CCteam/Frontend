/*eslint-disable*/

import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeVideoList from "../Components/YoutubeVideoList";
import { dummy } from "../PrDummy";
import YoutubeEmbed from "../Components/YoutubeEmbed";

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

const StyledCard = styled.div`
  display: flex;
  border-radius: 25px;
  width: 60vw;
  height: 30rem;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 10vh;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 10px 10px 10px 10px rgba(20, 40, 80, 100);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled(Card.Img)`
  width: 27.5rem;
  height: 30rem;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const CardBody = styled(Card.Body)`
  text-align: left;
  background-color: #86909b;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 20px;

  h4 {
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const CategoryButton = styled.div`
  background-color: #fb7b6a;
  color: #fff;
  border-radius: 5px;
  padding: 8px 12px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const Sns = styled.div`
  margin-top: 10px;
  display: flex;

  li {
    margin-right: 20px;
  }

  img {
    width: 40px;
    height: 35px;
    margin-right: 5px;
  }

  span {
    font-weight: 600;
    color: #fff;
  }
`;

const Separator = styled.hr`
  width: 70%;
  height: 2px;
  border: none;
  background-color: #fff;
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





export default function CreatorDetail() {
  const { state } = useLocation();

    // state 또는 state.photo가 존재하는지 확인.
    if (!state || !state.photo) {
        return <div>프로필 정보를 찾을 수 없습니다.</div>;
      }

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

      <StyledCard>
        <CardImage variant="top" src={state.photo} alt="프로필사진" />
        <CardBody>
          <Card.Title style={{ fontSize: "2rem", color: "#fff" }}>
            {state.name}
          </Card.Title>
          <Card.Text style={{ color: "#fff" }}>{state.title}</Card.Text>
          <h4>Category</h4>
          <CategoryButton>#{state.category}</CategoryButton>
          <h4>Contact</h4>
          <p>{state.email}</p>

          <h4>SNS</h4>
          <Sns>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/youtube.png"}
                alt="유튜브"
              />
              <span>{state.youtube}</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tictok.png"}
                alt="틱톡"
              />
              <span>{state.tictok}</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/insta.png"}
                alt="인스타"
              />
              <span>{state.insta}</span>
            </li>
          </Sns>
        </CardBody>
      </StyledCard>

      <Separator />

      
        <h3>PR</h3>
        <PRBox>
        <Card.Text style={{ color: "#fff" }}>{state.title}</Card.Text>
      </PRBox>

      <VideoContainer>
        <Slider {...sliderSettings}>
          {state.youtubeVideos.map((videoId, index) => (
            <div key={index}>
              <YoutubeEmbed videoId={videoId} />
            </div>
          ))}
        </Slider>
      </VideoContainer>
      <Footer />
    </CreatorContainer>
  );
}
