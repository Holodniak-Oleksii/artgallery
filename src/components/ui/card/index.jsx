import React from 'react';
import { Wrapper, InformationBar, Flex } from './style';
import { BlueButton } from '@/components/ui';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CardModel = ({ data }) => {
  const route = useRouter();
  return (
    <Wrapper>
      <Image
        src={data.image || data.pathImage}
        alt="model"
        className="image"
        width={1200}
        height={900}
      />
      <InformationBar>
        <span className="title">{data.title || data.name}</span>
        <Flex>
          <span className="author">@{data.author}</span>
          <BlueButton
            outline
            onClick={() => route.push(`/details/${data._id}`)}
          >
            View
          </BlueButton>
        </Flex>
      </InformationBar>
    </Wrapper>
  );
};

export default CardModel;