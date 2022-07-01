import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Description } from "./Description";
import { BigNumber } from "./BigNumber";

export const WorkItem = ({ number, title, description }) => {
  return (
    <Article>
      <BigNumber>{number}</BigNumber>
      <Title as="h3" size="28px" pt="24px" pb="24px" color="darkGreyBlue">
        {title}
      </Title>
      <Description color="darkGreyBlue">{description}</Description>
    </Article>
  );
};

const Article = styled.article`
  margin-bottom: 56px;
  text-align: center;

  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
    padding-right: 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
