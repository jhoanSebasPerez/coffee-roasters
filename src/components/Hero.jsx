import React from "react";
import styled from "styled-components";
import { useDynamicImg } from "../hook/useDynamicImg";

export const Hero = ({ page, big = false, children, imgName }) => {
  const cover = useDynamicImg(page, imgName);

  return (
    <Section img={cover} big={big}>
      <Content>{children}</Content>
    </Section>
  );
};

export const Section = styled.section`
  width: 100%;
  height: ${(props) => (props.big ? "500px" : "400px")};
  background-image: url("${(props) => props.img}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
    margin-left: 58px;
    display: block;
    width: 50%;
  }
`;
