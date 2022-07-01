import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Description } from "./Description";

export const HeadquarterItem = ({
  Icon,
  country,
  address,
  city,
  distric,
  phone,
}) => {
  return (
    <Article>
      <Icon />
      <Title as="h3" size="28px" color="darkGreyBlue" pt="46px" pb="22px">
        {country}
      </Title>
      <Description color="darkGreyBlue">{address}</Description>
      <Description color="darkGreyBlue">{city}</Description>
      <Description color="darkGreyBlue">{distric}</Description>
      <Description color="darkGreyBlue">{phone}</Description>
    </Article>
  );
};

const Article = styled.article`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 32px;
    justify-content: center;
  }
`;
