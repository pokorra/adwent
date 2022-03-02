import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { arrayOfGifts } from "../../dataBase/dataBase";

const Window = ({ currentDate, thisDay }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isBtnDsbled = currentDate >= thisDay ? false : true;
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        disabled={isBtnDsbled}
        className={`window window--picture-${thisDay} ${
          isBtnDsbled ? "darker" : "pointer"
        }`}
      ></button>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="lg"
        centered
        contentClassName="modal-additional"
      >
        <Modal.Header closeButton>
          <Modal.Title> {thisDay} grudnia: </Modal.Title>
        </Modal.Header>
        <Modal.Body>{arrayOfGifts[thisDay - 1]}</Modal.Body>
        <Modal.Footer>
          <button onClick={closeModal}>Zamknij</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Window;
