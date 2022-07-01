import React from "react";
import styled from "styled-components";
import { OrderSummary } from "../../components/OrderSummary";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useShowModal } from "../../hook/useShowModal";
import { OrderCheckout } from "../../components/OrderCheckout";

export const Summary = () => {
  const [showModal, handleShowModal] = useShowModal();

  return (
    <>
      <Section>
        <OrderSummary />
        <Button onClick={handleShowModal}>Create my plan!</Button>
      </Section>
      {showModal && (
        <Modal onClose={handleShowModal} type="checkout">
          <OrderCheckout />
        </Modal>
      )}
    </>
  );
};

const Section = styled.section`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
