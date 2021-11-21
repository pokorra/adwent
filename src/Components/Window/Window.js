import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'

const Window = ({currentDate, thisDay}) => {
    const [isModalOpen, setModalOpen] = useState(false);
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
      <Modal show={isModalOpen} onHide={closeModal} size="lg" centered contentClassName="modal-additional">
        <Modal.Header closeButton>
            <Modal.Title> {thisDay} grudnia: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p>Dziś jest: {currentDate}. grudnia. Ta strona pokazuje prezent na {thisDay}. grudnia.</p> <br/> <br/> <br/>
           <p>Psy </p>
           <br/> <br/> <br/>
           <p>Koty </p><br/> <br/> <br/>
           <p>Inne źwierzęta </p>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={closeModal}>Zamknij</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Window;
