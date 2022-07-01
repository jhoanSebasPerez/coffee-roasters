import React from "react";
import styled from "styled-components";

export const BigNumber = ({ children }) => {
  return <BigText>{children}</BigText>;
};

const BigText = styled.h4`
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
  color: var(--pale-orange);
  margin: 0;
`;
