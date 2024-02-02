/*eslint-disable*/
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YoutubeVideoList from "../Components/YoutubeVideoList";
import { dummy } from "../PrDummy";
import YoutubeEmbed from "../Components/YoutubeEmbed";
import { Link } from "react-router-dom";

const CreatorContainer = styled.div`
  background-color: #121c2e;
  align-items: center;
  

  h3 {
    color: #fff;
    font-weight: 700;
    margin-left: 10vw;
    margin-top: 4vh;
    font-size: 40px;
  }

  p{
    color: #fff;
    margin-top: 4vh;
    font-size:1.2rem;
    margin-left:40%
  }
`;

const StyledCard = styled.div`
  display: flex;
  border-radius: 25px;
  width: 100%;
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
  width: 60vw;
  text-align: center;
  margin-bottom: 10vh;
  margin:0 auto;

  p {
    color: #fff;
    margin-left: 10vw;
    font-size: 1.2rem;
    margin-bottom: 6vh;
  }
`;

const VideoContainer = styled.div`
  width: 800px;
  margin-bottom: 10vh;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin:0 auto;


  p {
    color: #fff;
    margin-left: 15vw;
    font-size: 1rem;
    margin-bottom: 6vh;
  }
`;

const EmbedContainer = styled.div`
  margin-top:5vh;
  width: 300px;
  height: 200px;

`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 12vw;
  height: 7vh;
  border-radius: 25px;
  color: #fff;
  text-align: center;
  align-items: center;
  font-size: 2rem;
  margin: 7vh 0 0 80vw;
  background-color: #fb7b6a;
  border: none;

  &:hover {
    background-color: #e36757;
  }
`;

export default function EditPr() {
  const [videoUrls, setVideoUrls] = useState([
    "https://www.youtube.com/watch?v=VIDEO_ID_1",
    "https://www.youtube.com/watch?v=VIDEO_ID_2",
    "https://www.youtube.com/watch?v=VIDEO_ID_3",
  ]);

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : "";
  };

  const handleVideoUrlChange = (index, value) => {
    const videoId = extractVideoId(value);
    const newVideoUrls = [...videoUrls];
    newVideoUrls[index] = `https://www.youtube.com/watch?v=${videoId}`;
    setVideoUrls(newVideoUrls);
  };

  const [pr, setPr] = useState({
    name: "",
    comment: "",
    email: "",
    introduction: "",
    // 추가 필요한 프로필 속성들...
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPr((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <CreatorContainer>
      <Header />
      <h3>크리에이터 PR</h3>

      <StyledCard>
        <CardImage variant="top" src="" alt="프로필사진" />
        <CardBody>
          <Card.Title style={{ fontSize: "2rem", color: "#fff" }}>
            메리기타
          </Card.Title>
          <Card.Text style={{ color: "#fff" }}>
            무슨무슨 광고경험이 있고,, 어쩌구저쩌구
          </Card.Text>
          <h4>카테고리 선택</h4>
          <h4>Contact</h4>
          <p>5622lsk@naver.com</p>

          <h4>SNS</h4>
          <Sns>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/youtube.png"}
                alt="유튜브"
              />
              <span>7만</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/tictok.png"}
                alt="틱톡"
              />
              <span>7만</span>
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + "/images/insta.png"}
                alt="인스타"
              />
              <span>6만</span>
            </li>
          </Sns>
        </CardBody>
      </StyledCard>

      <Separator />

      <h3>PR</h3>
      <PRBox>
        <p>
          어떤 사람과 협업하고 싶은지, 회원님은 어떤 생각을 가지고 있는지 자유롭게 어필해주세요.
        </p>
        <Input
          type="text"
          name="introduction"
          value={pr.introduction}
          onChange={handleInputChange}
        />
      </PRBox>

      <h3>참고하면 좋은 영상</h3>
      <p>내 채널을 제일 잘 표현하는 영상을 첨부해주세요</p>
      <VideoContainer>
        {videoUrls.map((videoUrl, index) => (
          <EmbedContainer key={index}>
            <Input
              type="text"
              placeholder={`유튜브 동영상 URL ${index + 1}`}
              value={videoUrl}
              onChange={(e) => handleVideoUrlChange(index, e.target.value)}
            />
            {/* 유튜브 임베드 코드를 추가 */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
              title={`YouTube video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </EmbedContainer>
        ))}
      </VideoContainer>
        <Button type="submit">
          <Link to='/profile' style={{ color: '#fff' }}>확인</Link>
        </Button>
      <Footer />
    </CreatorContainer>
  );
}




