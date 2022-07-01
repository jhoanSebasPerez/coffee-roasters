import React from "react";
import styled from "styled-components";
import { TextSummary } from "./TextSummary";

export const OrderSummary = () => {
  return (
    <OrderContainer>
      <Content>
        <Subtitle>ORDER SUMMARY</Subtitle>
        <TextSummary width="100%" />
      </Content>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  background-color: #2c343e;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  opacity: 0.5;
`;

const Content = styled.div`
  @media (min-width: 768px) {
    margin: 27px 44px;
  }
`;
