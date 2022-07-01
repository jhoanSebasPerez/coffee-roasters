import React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";
import { Description } from "../components/Description";

export const OptionItem = ({ name, description, Icon }) => {
  return (
    <Article>
      <Content>
        <Icon className="icon" />
        <TextContent>
          <Title as="h3" size="24px" pb="24px">
            {name}
          </Title>
          <Description>{description}</Description>
        </TextContent>
      </Content>
    </Article>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    margin: 0 auto;
  }
`;

const Article = styled.article`
  background-color: var(--dark-cyan);
  width: 279px;
  padding-top: 72px;
  border-radius: 8px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    padding-top: 0;
  }
`;

const TextContent = styled.div`
  width: 80%;
  text-align: center;
  margin: 56px auto 51px;

  @media (min-width: 768px) {
    width: 70%;
    text-align: left;
    margin-left: 55px;
    margin-top: 41px;
    margin-bottom: 41px;
  }
`;
