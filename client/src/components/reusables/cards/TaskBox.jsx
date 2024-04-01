import React from "react";
import "./TaskBox.css";
import TaskCard from "./TaskCard";

const TaskBox = (props) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTask = JSON.parse(e.dataTransfer.getData("text/plain"));
    const taskExists = props.tasks.some((task) => task.id === droppedTask.id);
    if (!taskExists) {
      const updatedTasks = props.tasks.filter(
        (task) => task.id !== droppedTask.id
      );
      props.onDrop(updatedTasks, droppedTask);
    }
  };

  return (
    <div
      className="taskBox"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="taskBoxheader">
        <h3 className="headerTitle" style={{ backgroundColor: props.bgcolor }}>
          {props.heading} ({props.tasks.length})
        </h3>
      </div>
      <div className="taskBoxBody">
        {props.tasks && props.tasks.length > 0 ? (
          props.tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div>
            <p className="no-tasks-found">No Tasks Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskBox;
