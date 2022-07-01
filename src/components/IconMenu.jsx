import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/shared/mobile/icon-close.svg";
import { Hamburger } from "../icons/Hamburger";

export const IconMenu = ({ showModal, handleNavbarFixed }) => {
  return (
    <Container>
      {showModal ? (
        <CloseIcon onClick={handleNavbarFixed} />
      ) : (
        <Hamburger onClick={handleNavbarFixed} />
      )}
    </Container>
  );
};

const Container = styled.div``;
