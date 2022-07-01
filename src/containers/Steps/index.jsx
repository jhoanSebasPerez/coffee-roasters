import React from "react";
import styled from "styled-components";
import { steps } from "./data";
import { StepItem } from "../../components/StepItem";
import { StepCircle } from "../../components/StepCircle";

export const Steps = ({ width }) => {
  return (
    <Section width={width}>
      <CircleContainer>
        <StepCircle />
      </CircleContainer>
      <StepsContainer>
        {steps.map((step) => (
          <StepItem key={step.title} {...step} />
        ))}
      </StepsContainer>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #2c343e;
  border-radius: 10px;
  padding: 30px 0 80px;
`;

const CircleContainer = styled.div`
  width: 86%;
  margin: 0 auto;
`;

const StepsContainer = styled.div`
  width: 86%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;
