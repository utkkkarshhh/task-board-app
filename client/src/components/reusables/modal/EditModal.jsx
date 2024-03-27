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
            <input disabled type="text" />
            <label>Description: </label>
            <input disabled type="text" />
            <label>Team: </label>
            <input disabled type="text" />
            <label>Assignees: </label>
            <input disabled type="text" />
            <div className="edit-modal-bottom">
              <div>
                <label>Priority: </label>
                <select
                  className="priority-input"
                  name="priority"
                  id="priority"
                >
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
              <div>
                <label>Status: </label>
                <select className="status-input" name="status" id="status">
                  <option value="assign">Assign</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="deployed">Deployed</option>
                  <option value="deffered">Deffered</option>
                </select>
              </div>
            </div>

            <Button className="add-button" name="Submit" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
