import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { headquarters } from "./data";
import { HeadquarterItem } from "../../components/HeadquarterItem";

export const Headquarters = () => {
  return (
    <Section>
      <Title as="h2" size="24px" color="grey">
        Our headquarters
      </Title>
      <Content>
        {headquarters.map((headquarter) => (
          <HeadquarterItem key={headquarter.city} {...headquarter} />
        ))}
      </Content>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 120px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 72px;
    flex-direction: row;
  }
`;
