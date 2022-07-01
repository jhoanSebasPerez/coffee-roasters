import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Description } from "./Description";

const colors = {
  bgColor: ["#f4f1eb", "#0E8784"],
  textColor: ["darkGreyBlue", "lightCream"],
};

export const AnswerItem = ({ active = false, title, description }) => {
  const index = +active;

  return (
    <Article index={index}>
      <Content>
        <Title as="h3" size="24px" align="left" color={colors.textColor[index]}>
          {title}
        </Title>
        <Description color={colors.textColor[index]} mt="8px" align="left">
          {description}
        </Description>
      </Content>
    </Article>
  );
};

const Article = styled.article`
  width: 100%;
  background-color: ${(props) => colors.bgColor[props.index]};
  border-radius: 8px;
  height: auto;
  margin-bottom: 16px;
`;

const Content = styled.div`
  padding: 24px;

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 84px;
  }
`;
