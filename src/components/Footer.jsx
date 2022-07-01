import React from "react";
import styled from "styled-components";
import { Logo } from "../icons/Logo";
import { Menu } from "./Menu";
import { SocialMedia } from "./SocialMedia";
import { Container } from "../globalStyles";

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Logo fillText="white" />
        <Menu type="list" width="40%" />
        <SocialMedia />
      </FooterContainer>
    </Container>
  );
};

const FooterContainer = styled.footer`
  padding-top: 55px;
  width: 100%;
  background-color: #2c343e;
  margin-top: 120px;
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
