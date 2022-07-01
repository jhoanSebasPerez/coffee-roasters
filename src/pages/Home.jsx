import React from "react";
import styled from "styled-components";
//Components
import { Hero } from "../components/Hero";
/* import { Title } from "../components/Title"; */
import { Description } from "../components/Description";
import { Button } from "../components/Button";
import { Container } from "../globalStyles";
//Containers
import { Collection } from "../containers/Collection";
import { ChooseUs } from "../containers/ChooseUs";
import { HowWork } from "../containers/HowWork";

const imgName = "image-hero-coffeepress.jpg";

export const Home = () => {
  return (
    <Container>
      <Hero page="home" imgName={imgName} big>
        <Title>Great coffee made simple.</Title>
        <Description mb="39px" opacity={true.toString()}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </Description>
        <Button>Create your plan</Button>
      </Hero>
      <Collection />
      <ChooseUs />
      <HowWork />
    </Container>
  );
};

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 24px;
`;
