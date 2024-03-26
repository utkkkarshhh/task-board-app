import React from "react";
import Modal from "./Modal";
import "./CreateModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../buttons/Button";

const CreateModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="create-modal">
        <div className="create-modal-header">
          <div className="create-modal-heading">CREATE A TASK</div>
          <div className="create-modal-close" onClick={props.onClose}>
            <IoIosCloseCircleOutline />
          </div>
        </div>
        <div className="create-modal-body">
          <form className="create-modal-form">
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
            <Button className="add-button" name="Add Task"/>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
