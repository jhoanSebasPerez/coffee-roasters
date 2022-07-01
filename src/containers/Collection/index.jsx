import React from "react";
import styled from "styled-components";
import { collectionCoffee } from "./data";
import { CoffeeItem } from "../../components/CoffeeItem";

export const Collection = () => {
  return (
    <Section>
      <Title>our collection</Title>
      <CollectionContainer>
        {collectionCoffee.map((coffee) => (
          <CoffeeItem key={coffee.id} {...coffee} />
        ))}
      </CollectionContainer>
    </Section>
  );
};

const CollectionContainer = styled.div`
  z-index: 1;

  @media (min-width: 768px) {
    margin-top: 80px;
    width: 70%;
  }
`;

const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 72px;
  text-align: center;
  background: #a3a29f;
  background: linear-gradient(to bottom, #a3a29f 26%, #fefcf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 96px;
    position: absolute;
    top: 0;
  }
`;
