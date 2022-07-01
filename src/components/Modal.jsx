import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Modal = ({ onClose, children, type }) => {
  const closeOnEscKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <Overlay onClick={onClose} type={type}>
      <ModalContent onClick={(e) => e.stopPropagation()} type={type}>
        {children}
      </ModalContent>
    </Overlay>,
    document.getElementById("modal")
  );
};

const typeModal = {
  menu: {
    overlay: css`
      top: 90px;
      background: linear-gradient(
        180deg,
        rgba(254, 252, 247, 0.504981) 0%,
        #fefcf7 55.94%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    `,
    content: css`
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: rotate(180deg) scaleX(-1) translateX(-50%);
    `,
  },
  checkout: {
    overlay: css`
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    `,
    content: css`
      width: 100%;
      margin-top: 35px;
      border-radius: 8px;
    `,
  },
};

const Overlay = styled.div`
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  ${(props) => typeModal[props.type].overlay}
`;

const ModalContent = styled.div`
  ${(props) => typeModal[props.type].content}
`;

export { Modal };
