import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import styled from "styled-components";
import { dummy } from '../PrDummy';


const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; 
  justify-content: center; 
`;


export default function YoutubeVideoList() {
    const {profile} = dummy;

  return (
    <VideoContainer>
      {profile.map((user, index) => (
        <div key={index}>
          <YoutubeEmbed videoId={user.youtubeVideos[0]} />
        </div>
      ))}
    </VideoContainer>
  );
}
