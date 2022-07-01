import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/plan/desktop/icon-arrow.svg";
import { Title } from "../../components/Title";
import { AnswerItem } from "../../components/AnswerItem";

export const Question = ({ question, options }) => {
  return (
    <Section>
      <Header>
        <Title as="h2" size="24px" color="grey" align="left" width="80%">
          {question}
        </Title>
        <ArrowIcon />
      </Header>

      <AnswerContainer>
        {options.map((option, index) => (
          <AnswerItem key={index} {...option} />
        ))}
      </AnswerContainer>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 120px;

  @media (min-width: 768px) {
    margin-top: 90px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AnswerContainer = styled.div`
  margin-top: 32px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;
