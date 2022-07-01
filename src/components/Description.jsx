import React from "react";
import styled, { css } from "styled-components";
import { globalColors } from "../globalStyles";

export const Description = ({
  children,
  width = "100%",
  mt = 0,
  mb = 0,
  ml = "0",
  mr = "0",
  color = "lightCream",
  opacity = "false",
}) => {
  return (
    <Paragraph
      width={width}
      mt={mt}
      mb={mb}
      color={color}
      opacity={opacity}
      mr={mr}
      ml={ml}
    >
      {children}
    </Paragraph>
  );
};

const styles = ({ width, mt, mb, color, opacity, align, mr, ml }) =>
  css`
    width: ${width};
    margin-top: ${mt};
    margin-bottom: ${mb};
    margin-right: ${mr};
    margin-left: ${ml};
    color: ${globalColors[color]};
    ${opacity === "true" ? "opacity: 0.8" : null};
    text-align: ${align};
  `;

const Paragraph = styled.p`
  ${(props) => styles(props)}
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;
