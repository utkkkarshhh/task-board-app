import React, { useState } from "react";
import "./TaskCard.css";
import { HiDotsVertical } from "react-icons/hi";
import Button from "../buttons/Button";
import DeleteModal from "../modal/DeleteModal";
import EditModal from "../modal/EditModal";

const TaskCard = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const deleteModalOpenHandler = () => {
    setDeleteModalOpen(true);
  };

  const deleteModalCloseHandler = () => {
    setDeleteModalOpen(false);
  };

  const editModalOpenHandler = () => {
    setEditModalOpen(true);
  };

  const editModalCloseHandler = () => {
    setEditModalOpen(false);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(props.task));
  };

  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      <div className="task-card-header">
        <div>
          <h2 className="task-heading">{props.task.title}</h2>
        </div>
        <div className="task-priority">
          <p className="task-priority-box">{props.task.priority}</p>
        </div>
      </div>
      <hr></hr>
      <div className="task-card-body">
        <p className="task-content">{props.task.content}</p>
      </div>
      <div className="task-card-footer">
        <div>
          <p className="task-card-assignee">@{props.task.assignee}</p>
        </div>
        <div>
          <p className="task-card-menu-option" onClick={menuOpenHandler}>
            <HiDotsVertical />
          </p>
          {menuOpen && (
            <div className="task-card-menu">
              <div onClick={editModalOpenHandler}>Edit</div>
              {editModalOpen && <EditModal onClose={editModalCloseHandler} />}
              <hr className="menuhr"></hr>
              <div onClick={deleteModalOpenHandler}>Delete</div>
              {deleteModalOpen && (
                <DeleteModal onClose={deleteModalCloseHandler} />
              )}
            </div>
          )}
        </div>
      </div>
      <Button name={props.task.status || "No Status"} />
    </div>
  );
};

export default TaskCard;
