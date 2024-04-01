import React from "react";
import Modal from "./Modal";
import "./DeleteModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../buttons/Button";

const DeleteModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="delete-modal">
        <div className="delete-modal-header">
          <div className="delete-modal-heading">DELETE TASK</div>
          <div className="closeButton" onClick={props.onClose}>
            <IoIosCloseCircleOutline />
          </div>
        </div>
        <div className="delete-modal-body">
          <div className="delete-modal-content">
            <p className="delete-modal-text">
              Do you wish to delete this task?
            </p>
          </div>
          <div className="modal-buttons">
            <Button name="Delete" onClick={props.onDelete} />
            <Button name="Cancel" onClick={props.onClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
