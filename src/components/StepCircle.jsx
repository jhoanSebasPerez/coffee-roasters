import React from "react";
import styled from "styled-components";

export const StepCircle = () => {
  return (
    <Container>
      <ContainerCircle>
        <Circle></Circle>
        <Line />
      </ContainerCircle>
      <ContainerCircle>
        <Circle></Circle>
        <Line />
      </ContainerCircle>
      <ContainerCircle>
        <Circle></Circle>
      </ContainerCircle>
    </Container>
  );
};

const ContainerCircle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    margin: 40px 0;
  }
`;

const Circle = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: 1px solid var(--dark-cyan);
`;

const Line = styled.div`
  width: calc(100% - 31px);
  border: 1px solid var(--pale-orange);
`;
