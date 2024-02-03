import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 25px;
    position: relative;

    &:hover {
        filter: brightness(90%); 
    }

    @media (max-width: 1024px) {
        margin-top: 15vh;
    }
`;

const StyledCard = styled(Card)`
    width: 27.5rem;
    height: 38rem;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 10px 10px 10px 10px rgba(20, 40, 80, 100);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 240px;
        height: 300px;
    }
`;

const CardImage = styled(Card.Img)`
    width: 27.5rem;
    height: 37vh;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;

    @media (max-width: 768px) {
        width: 250px;
        height: 220px;
    }
`;

const CardBody = styled(Card.Body)`
    text-align: center;
    background-color: #86909B;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    @media (max-width: 768px) {
        width: 250px;
        height: 220px;
    }
`;

const CardTitle = styled(Card.Title)`
    font-size: 2rem;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const CardText = styled(Card.Text)`
    color: #fff;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const SnsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const SnsImage = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;

    @media (max-width: 768px) {
    width: 20px;
    height: 20px; 
    }
`;

const SnsText = styled.span`
    font-weight: bold;

    @media (max-width: 768px) {
    font-size:0.8rem;
    }
`;

export default function Creator(props) {
    const navigate = useNavigate();

    const onClickCreatorItem = () => {
        navigate(`/pr/${props.name}`, {
            state: props
        });
    }

    return (
        <CardContainer onClick={onClickCreatorItem}>
            <StyledCard>
                <CardImage variant="top" src={props.photo} alt="프로필사진" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.title}</CardText>
                    <SnsContainer>
                        <SnsImage src={process.env.PUBLIC_URL + '/images/youtube.png'} alt="유튜브" />
                        <SnsText>{props.youtube}</SnsText>
                    </SnsContainer>
                    <SnsContainer>
                        <SnsImage src={process.env.PUBLIC_URL + '/images/tictok.png'} alt="틱톡" />
                        <SnsText>{props.tictok}</SnsText>
                    </SnsContainer>
                    <SnsContainer>
                        <SnsImage src={process.env.PUBLIC_URL + '/images/insta.png'} alt="인스타" />
                        <SnsText>{props.insta}</SnsText>
                    </SnsContainer>
                </CardBody>
            </StyledCard>
        </CardContainer>
    );
}
