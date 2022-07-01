import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { TextSummary } from "./TextSummary";
import { Description } from "./Description";
import { Container } from "../globalStyles";
import { Button } from "./Button";

export const OrderCheckout = () => {
  return (
    <CheckoutContainer>
      <Header>
        <Title size="28px" as="h2" pt="28px" pb="28px" align="left" pl="24px">
          Order Summary
        </Title>
        <Content>
          <TextSummary type="dark" ml="24px" />
          <Description
            color="darkGreyBlue"
            align="left"
            mb="24px"
            ml="24px"
            width="90%"
          >
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </Description>
          <Container>
            <Button type="big">Checkout - $14.00 / mo</Button>
          </Container>
        </Content>
      </Header>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  width: 86%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
`;

const Header = styled.div`
  width: 100%;
  background-color: var(--dark-grey-blue);
  border-radius: 8px;
`;

const Content = styled.div`
  width: 100%;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
`;
