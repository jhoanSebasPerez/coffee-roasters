import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { Description } from "../components/Description";

export const CoffeeItem = ({ id, name, description, img }) => {
  return (
    <Article>
      <Img src={img} alt={name} />
      <Content>
        <Title as="h3" color="darkGreyBlue" size="24px" pt="24px" pb="16px">
          {name}
        </Title>
        <Description color="darkGreyBlue" mb="48px">
          {description}
        </Description>
      </Content>
    </Article>
  );
};

const Article = styled.article`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 151px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 80%;
  text-align: center;

  @media (min-width: 768px) {
    width: 60%;
    text-align: left;
  }
`;
