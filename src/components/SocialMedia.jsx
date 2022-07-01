import React from "react";
import { ReactComponent as FacebookIcon } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/shared/desktop/icon-instagram.svg";
import styled from "styled-components";

export const SocialMedia = () => {
  return (
    <SocialContainer>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 54px;
`;
