import React from "react";
import styled from "styled-components";
import { globalColors } from "../globalStyles";

export const TextSummary = ({ type = "light", width = "86%", ml = "0" }) => {
  return (
    <Text type={type} width={width} ml={ml}>
      “I drink my coffee as <Highlight>Filter</Highlight>, with a{" "}
      <Highlight>Decaf</Highlight> type of bean. <Highlight>250g</Highlight>{" "}
      ground ala <Highlight>Cafetiére</Highlight>, sent to me{" "}
      <Highlight>Every Week</Highlight> .”
    </Text>
  );
};

const Text = styled.p`
  width: ${(props) => props.width};
  margin-top: 8px;
  margin-left: ${(props) => props.ml};
  font-size: 24px;
  font-weight: 900;
  line-height: 40px;
  color: ${(props) => (props.type === "light" ? "#fff" : "#83888F")};
`;

const Highlight = styled.span`
  font-size: 24px;
  font-weight: 900;
  line-height: 40px;
  color: ${globalColors["darkCyan"]};
`;
