import React from 'react';
import Image from 'next/image';
import { Wrapper } from './style';
import gif from '@/assets/images/gif/banner.gif';

const VideoWindow = () => {
  return (
    <Wrapper className="video-container">
      <Image
        src={gif}
        alt="banner"
        width={800}
        height={600}
      />
      <svg className="svg">
        <clipPath
          id="my-clip-path"
          clipPathUnits="objectBoundingBox"
        >
          <path d="M0,0 H0.323 V0.833 H0 V0 M0.339,0.083 H0.661 V0.917 H0.339 V0.083 M1,0.167 H0.677 V1 H1 V0.167"></path>
        </clipPath>
      </svg>
    </Wrapper>
  );
};

export default VideoWindow;
