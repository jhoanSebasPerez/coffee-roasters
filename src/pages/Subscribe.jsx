import React from "react";
import { Hero } from "../components/Hero";
import { Title } from "../components/Title";
import { Description } from "../components/Description";
import { Steps } from "../containers/Steps";
import { Question } from "../containers/Question";
import { Container } from "../globalStyles";
import { questions } from "../data/questions";
import { Summary } from "../containers/Summary";

const imgName = "image-hero-blackcup.jpg";

export const Subscribe = () => {
  return (
    <>
      <Container>
        <Hero page="plan" imgName={imgName}>
          <Title as="h1" size="40px" pt="101px" pb="22px">
            Create a plan
          </Title>
          <Description mb="136px" width="90%" opacity={true.toString()}>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Description>
        </Hero>
      </Container>
      <Steps />
      <Container>
        {questions.map((question, index) => (
          <Question key={index} {...question} />
        ))}

        <Summary />
      </Container>
    </>
  );
};
