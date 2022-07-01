import React from "react";
import styled from "styled-components";
import { BigNumber } from "./BigNumber";
import { Title } from "./Title";
import { Description } from "./Description";

export const StepItem = ({ number, title, description }) => {
  return (
    <Article>
      <BigNumber>{number}</BigNumber>
      <Title as="h3" size="28px" pt="24px" pb="24px">
        {title}
      </Title>
      <Description>{description}</Description>
    </Article>
  );
};

const Article = styled.article`
  margin-top: 56px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 10px;
    text-align: left;
    margin-right: 12px;
  }
`;
