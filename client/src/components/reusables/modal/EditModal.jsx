import React from "react";
import Modal from "./Modal";
import "./EditModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../buttons/Button";

const EditModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="edit-modal">
        <div className="edit-modal-header">
          <div className="edit-modal-heading">EDIT A TASK</div>
          <div className="edit-modal-close" onClick={props.onClose}>
            <IoIosCloseCircleOutline />
          </div>
        </div>
        <div className="edit-modal-body">
          <form className="edit-modal-form">
            <label>Title: </label>
            <input type="text" />
            <label>Description: </label>
            <input type="text" />
            <label>Team: </label>
            <input type="text" />
            <label>Assignees: </label>
            <input type="text" />
            <label>Priority: </label>
            <select className="priority-input" name="priority" id="priority">
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <Button className="add-button" name="Submit" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
