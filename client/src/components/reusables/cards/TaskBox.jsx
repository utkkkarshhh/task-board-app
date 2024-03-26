import React from "react";
import "./TaskBox.css";
import TaskCard from "./TaskCard";

const TaskBox = (props) => {
  return (
    <div className="taskBox">
      <div className="taskBoxheader">
        <h3 className="headerTitle" style={{ backgroundColor: props.bgcolor }}>
          {props.heading} ({props.tasks.length  })
        </h3>
      </div>
      <div className="taskBoxBody">
        {props.tasks && props.tasks.length > 0 ? (
          props.tasks.map((task, index) => (
            <TaskCard
              key={index}
              taskTitle={task.title}
              taskPriority={task.priority}
              taskContent={task.content}
              taskAssignee={task.assignee}
              taskStatus={task.status}
            />
          ))
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
