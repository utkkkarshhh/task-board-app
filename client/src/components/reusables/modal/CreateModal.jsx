import React, { useState } from "react";
import Modal from "./Modal";
import "./CreateModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../buttons/Button";
import axios from "axios";
import baseURL from "../../baseURL";

const CreateModal = (props) => {
  const [addTask, setAddTask] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseURL}/api/addTask`,
        addTask
      );

      if (response.status === 200) {
        console.log("Task added successfully!");
      }

      setAddTask({
        title: "",
        description: "",
        team: "",
        assignee: "",
        priority: "",
      });
      props.onClose();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

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
          <form className="create-modal-form" onSubmit={handleSubmit}>
            <label>Title: </label>
            <input
              required
              type="text"
              name="title"
              value={addTask.title}
              onChange={handleChange}
            />
            <label>Description: </label>
            <input
              required
              type="text"
              name="description"
              value={addTask.description}
              onChange={handleChange}
            />
            <label>Team: </label>
            <input
              required
              type="text"
              name="team"
              value={addTask.team}
              onChange={handleChange}
            />
            <label>Assignees: </label>
            <input
              required
              type="text"
              name="assignee"
              value={addTask.assignee}
              onChange={handleChange}
            />
            <label>Priority: </label>
            <select
              className="priority-input"
              name="priority"
              value={addTask.priority}
              onChange={handleChange}
            >
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <Button
              className="add-button"
              type="submit"
              name="Add Task"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
