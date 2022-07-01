import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";
import { content } from "./data";
import { useDynamicImg } from "../../hook/useDynamicImg";

export const OurCommitment = () => {
  const img = useDynamicImg("about", "image-commitment.jpg");

  return (
    <Section>
      <Image src={img} />
      <Content>
        <Title as="h2" size="32px" color="darkGreyBlue" pb="30px">
          {content.title}
        </Title>
        <Description color="darkGreyBlue" opacity={true.toString()}>
          {content.description}
        </Description>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  margin: 120px 0 198px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 281px;
    height: 470px;
  }
`;

const Content = styled.div`
  margin-top: 48px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 70px;
    margin-top: 14px;
  }
`;
