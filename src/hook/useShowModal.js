import { useState } from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return [showModal, handleShowModal];
};
