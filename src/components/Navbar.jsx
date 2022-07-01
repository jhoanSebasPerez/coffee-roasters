import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import { Modal } from "./Modal";
import { Menu } from "./Menu";
import { useShowModal } from "../hook/useShowModal";
import { IconMenu } from "./IconMenu";

export const Navbar = () => {
  const [showModal, handleShowModal] = useShowModal();
  const [navbarFixed, setNavbarFixed] = useState(false);

  const handleNavbarFixed = () => {
    handleShowModal();
    setNavbarFixed(!navbarFixed);
  };

  return (
    <>
      <Nav fixed={navbarFixed}>
        <Content>
          <Logo />
          <MenuMobile>
            <IconMenu
              showModal={showModal}
              handleNavbarFixed={handleNavbarFixed}
            />
          </MenuMobile>
          <MenuContainer>
            <Menu type="list" />
          </MenuContainer>
        </Content>
      </Nav>
      {showModal && (
        <Modal type="menu" onClose={handleNavbarFixed}>
          <Menu type="modal" />
        </Modal>
      )}
    </>
  );
};

const fixedStyles = () =>
  css`
    position: fixed;
    top: 0;
    width: 100%;
  `;

const Nav = styled.nav`
  width: 100%;
  ${(props) => (props.fixed ? fixedStyles() : "position: relative;")}
  background-color: var(--light-cream);
  padding-top: 32px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 16px;
  }
`;

const Content = styled.div`
  width: 86%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }
`;

const MenuMobile = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
