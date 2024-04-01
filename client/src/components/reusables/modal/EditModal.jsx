import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./EditModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../buttons/Button";
import axios from "axios";
import baseURL from "../../baseURL";

const EditModal = (props) => {
  const [taskData, setTaskData] = useState({
    id: "",
    title: "",
    description: "",
    team: "",
    assignees: "",
    priority: "P0",
    status: "Assign",
  });

  useEffect(() => {
    if (props.task) {
      setTaskData({
        id: props.task._id,
        title: props.task.title,
        description: props.task.content,
        team: "No value available",
        assignees: props.task.assignee || "",
        priority: props.task.priority,
        status: props.task.status,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handlePriorityChange = (e) => {
    console.log("New priority: " + e.target.value);
    setTaskData({ ...taskData, priority: e.target.value });
  };

  const handleStatusChange = (e) => {
    setTaskData({ ...taskData, status: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = taskData.id;
      await axios.patch(`${baseURL}/api/editTask`, {
        taskId: id,
        status: taskData.status,
        priority: taskData.priority,
      });
      props.onClose();
    } catch (error) {
      console.error("Error editing task:", error);
      return;
    }
  };

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
          <form className="edit-modal-form" onSubmit={handleSubmit}>
            <label>Title: </label>
            <input
              disabled
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
            />
            <label>Description: </label>
            <input
              disabled
              type="text"
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
            />
            <label>Team: </label>
            <input
              disabled
              type="text"
              name="team"
              value={taskData.team}
              onChange={handleInputChange}
            />
            <label>Assignees: </label>
            <input
              disabled
              type="text"
              name="assignees"
              value={taskData.assignees}
              onChange={handleInputChange}
            />
            <div className="edit-modal-bottom">
              <div>
                <label>Priority: </label>
                <select
                  className="priority-input"
                  name="priority"
                  value={taskData.priority}
                  onChange={handlePriorityChange}
                >
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </div>
              <div>
                <label>Status: </label>
                <select
                  className="status-input"
                  name="status"
                  value={taskData.status}
                  onChange={handleStatusChange}
                >
                  <option value="Assign">Assign</option>
                  <option value="In-Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deployed">Deployed</option>
                  <option value="Deferred">Deferred</option>
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
