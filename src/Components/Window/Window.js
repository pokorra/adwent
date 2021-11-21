import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'

const Window = ({currentDate, thisDay}) => {
    // console.log(currentDate, thisDay);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const isBtnDsbled = currentDate >= thisDay ? false : true;
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // const customStyles = {
    //     content: {
    //         width: '80vw',
    //         height: '90vh',
    //         position: 'absolute',
    //         zIndex: '5',
    //         border: '2px solid white',
    //         backgroundColor: 'pink',
    //         top: '5vh',
    //         left: '10vw',
    //         color: 'black'
    //     }
    // }
  return (
    <>
      <button onClick={openModal} disabled={isBtnDsbled} className={`window window-pic-${thisDay} ${isBtnDsbled ? 'darker' : 'pointer'}`}>
      </button>
      <Modal show={isModalOpen} onHide={closeModal} >
        <Modal.Header closeButton>
            <Modal.Title> {thisDay} grudnia </Modal.Title>
        </Modal.Header>
      </Modal>
      {/* <Modal isOpen={isModalOpen} style={customStyles}>
        <h2>dzień: {thisDay} </h2>
      </Modal> */}
    </>
  );
};

export default Window;
