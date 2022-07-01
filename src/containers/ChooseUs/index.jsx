import React from "react";
import styled from "styled-components";
import imgUrl from "../../assets/home/mobile/Bitmap.png";
import { OptionItem } from "../../components/OptionItem";
import { options } from "./data";
import { Title } from "../../components/Title";
import { Description } from "../../components/Description";

export const ChooseUs = () => {
  return (
    <Section>
      <TextContainer>
        <Title as="h2" pt="64px" pb="24px" size="28px">
          Why choose us?
        </Title>
        <Description opacity={true.toString()} mb="28px">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Description>
      </TextContainer>
      <OptionsContainer>
        {options.map((option) => (
          <OptionItem key={option.id} {...option} />
        ))}
      </OptionsContainer>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 902px;
  background-color: #2c343e;
  border-radius: 10px;
  margin-top: 120px;
  margin-bottom: 717px;

  @media (min-width: 768px) {
    height: 573px;
    margin-bottom: 434px;
  }
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  border-radius: 10px 10px 0 0;
  text-align: center;
`;

const OptionsContainer = styled.div`
  background-image: url("${imgUrl}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  border-radius: 0 0 10px 10px;

  @media (min-width: 768px) {
    background-image: none;
    padding-top: 42px;
  }
`;
