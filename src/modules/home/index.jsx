import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";

import Container from "@/components/containers";
import video from "@/assets/movies/banner-video.mp4";
import { Item, Banner, Wrapper } from "./style";

const Home = () => {
  const push = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Banner>
          <ReactPlayer
            url={video}
            muted={true}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            controls={true}
          />
          <svg class='svg'>
            <clipPath id='my-clip-path' clipPathUnits='objectBoundingBox'>
              <path d='M0,0 H0.323 V0.833 H0 V0 M0.339,0.083 H0.661 V0.917 H0.339 V0.083 M1,0.167 H0.677 V1 H1 V0.167'></path>
            </clipPath>
          </svg>
        </Banner>
      </Container>
    </Wrapper>
  );
};

export default Home;