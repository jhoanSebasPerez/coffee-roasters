import React from "react";
import { Hero } from "../components/Hero";
import { Title } from "../components/Title";
import { Description } from "../components/Description";
import { OurCommitment } from "../containers/OurCommitment";
import { Quality } from "../containers/Quality";
import { Headquarters } from "../containers/Headquarters";
import { Container } from "../globalStyles";

const imgName = "image-hero-whitecup.jpg";

export const AboutUs = () => {
  return (
    <Container>
      <Hero page="about" imgName={imgName}>
        <Title as="h1" size="28px" pt="121px" pb="24px">
          About Us
        </Title>
        <Description width="90%" opacity={true.toString()}>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </Description>
      </Hero>
      <OurCommitment />
      <Quality />
      <Headquarters />
    </Container>
  );
};
