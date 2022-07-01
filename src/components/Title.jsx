import React from "react";
import styled, { css } from "styled-components";
import { globalColors } from "../globalStyles";

export const Title = ({
  as,
  children,
  color = "lightCream",
  size,
  pl = "0",
  pr = "0",
  pt = "0",
  pb = "0",
  width = "100%",
}) => {
  const propsSend = { as, color, size, pt, pb, width, pl, pr };

  const types = {
    h1: <H1 {...propsSend}>{children}</H1>,
    h2: <H2 {...propsSend}>{children}</H2>,
    h3: <H3 {...propsSend}>{children}</H3>,
  };

  return types[as];
};

const titleStyles = ({ size, color, pt, pb, width, align, pr, pl }) =>
  css`
    width: ${width};
    font-weight: 900;
    font-size: ${size};
    color: ${globalColors[color]};
    margin-top: 0;
    margin-bottom: 0;
    text-align: ${align};
    padding-top: ${pt};
    padding-bottom: ${pb};
    padding-right: ${pr};
    padding-left: ${pl};
  `;

const H1 = styled.h1`
  ${(props) => titleStyles(props)}
`;

const H3 = styled.h3`
  ${(props) => titleStyles(props)}
`;

const H2 = styled.h2`
  ${(props) => titleStyles(props)}
`;
