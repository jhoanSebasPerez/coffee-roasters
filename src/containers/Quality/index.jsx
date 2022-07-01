import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";
import { content } from "./data";
import { useDynamicImg } from "../../hook/useDynamicImg";

export const Quality = () => {
  const img = useDynamicImg("about", "image-quality.jpg");

  return (
    <Section>
      <Image src={img} />
      <TextContainer>
        <Title as="h2" pt="136px" pb="24px" size="28px">
          {content.title}
        </Title>
        <Description opacity={true.toString()} mb="61px">
          {content.description}
        </Description>
      </TextContainer>
    </Section>
  );
};

const Section = styled.section`
  background-color: #2c343e;
  position: relative;
  width: 100%;
  min-height: 500px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 305px;
    height: 488px;
  }
`;

const Image = styled.img`
  width: 279px;
  height: 156px;
  object-fit: contain;
  position: absolute;
  top: -78px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 573px;
    height: 320px;
    top: -160px;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  text-align: center;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    top: 100px;
  }
`;
