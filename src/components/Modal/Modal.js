import "./Modal.css";
import Form from "../Form/Form";
import { useState } from "react";
const Modal = (props) => {
  const {isModalOpen, selectedNote, toggleModal, editNote } = props;

  const [hasCursor, setHasCursor] = useState(false);

  const handleCloseModal =() => !hasCursor && toggleModal();
  const handleMouseOverModal = () => setHasCursor(true);
  const handleMouseOutModal = () => setHasCursor(false);

  return (
    <div>
      <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModal}>
        <div className="modal-content" onMouseOver={ handleMouseOverModal} onMouseOut={ handleMouseOutModal}>
          <Form selectedNote={selectedNote}  toggleModal={toggleModal} editNote={editNote}edit/>
        </div>
      </div>
    </div>
  );
}

export default Modal;