import React from "react";
import styled from "styled-components";
import { WorkItem } from "../../components/WorkItem";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { stepsHowWork } from "./data";
import { StepCircle } from "../../components/StepCircle";

export const HowWork = () => {
  return (
    <Section>
      <Title as="h2" color="grey" fz="24px">
        How it works
      </Title>
      <StepCircle />
      <StepsContainer>
        {stepsHowWork.map((step) => (
          <WorkItem key={step.id} {...step} />
        ))}
      </StepsContainer>
      <Button>Create your plan</Button>
    </Section>
  );
};

const Section = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const StepsContainer = styled.div`
  margin: 80px 0 23px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`;
