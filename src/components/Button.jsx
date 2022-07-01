import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick, type = "medium" }) => {
  return (
    <ButtonStyles onClick={onClick} type={type}>
      {children}
    </ButtonStyles>
  );
};

const ButtonStyles = styled.button`
  width: ${(props) => (props.type === "big" ? "100%" : "217px")};
  height: 56px;
  background-color: var(--dark-cyan);
  border-radius: 6px;
  border: none;
  color: var(--light-cream);
  font-weight: 900;
  font-size: 18px;
  font-family: "Fraunces", serif;
`;
