import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export const Menu = ({ type, width = "100%" }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <MenuContainer width={width}>
      <Item to="/" onClick={handleClick} type={type}>
        Home
      </Item>
      <Item to="about" onClick={handleClick} type={type}>
        About Us
      </Item>
      <Item to="subscribe" onClick={handleClick} type={type}>
        Create Your Plan
      </Item>
    </MenuContainer>
  );
};

const styles = {
  modal: css`
    font-weight: 900;
    font-size: 24px;
    color: var(--dark-grey-blue);
    margin-bottom: 32px;
  `,
  list: css`
    font-weight: 700;
    font-size: 12px;
    font-family: "Barlow", sans-serif;
    color: var(--grey);
    margin-bottom: 24px;
    text-transform: uppercase;
  `,
};

const MenuContainer = styled.ul`
  width: ${(props) => props.width};
  list-style: none;
  padding-left: 0;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  text-align: center;
  ${(props) => styles[props.type]}
`;
