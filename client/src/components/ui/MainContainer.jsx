// MainContainer.js
import React, { useState } from "react";
import "./MainContainer.css";
import TaskBox from "../reusables/cards/TaskBox";
import {
  pendingTasks,
  inProgressTasks,
  completedTasks,
  deployedTasks,
  deferredTasks,
} from "../store/data";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";
import Button from "../reusables/buttons/Button";
import CreateModal from "../reusables/modal/CreateModal";
import AddBox from "../reusables/cards/AddBox";

const MainContainer = () => {
  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  const [tasks, setTasks] = useState({
    pendingTasks: pendingTasks,
    inProgressTasks: inProgressTasks,
    completedTasks: completedTasks,
    deployedTasks: deployedTasks,
    deferredTasks: deferredTasks,
  });

  const createModalHandler = () => {
    setCreateModalVisibility(true);
  };

  const createModalCloseHandler = () => {
    setCreateModalVisibility(false);
  };

  const handleDrop = (category, updatedTasks, droppedTask) => {
    const updatedTaskList = {
      ...tasks,
      [category]: updatedTasks.concat(droppedTask),
    };
    // Searching the task in prev category using ID
    const previousCategory = Object.keys(tasks).find((key) =>
      tasks[key].find((task) => task.id === droppedTask.id)
    );

    // Removing the dropped task from previous category using ID
    updatedTaskList[previousCategory] = updatedTaskList[
      previousCategory
    ].filter((task) => task.id !== droppedTask.id);

    setTasks(updatedTaskList);
  };

  return (
    <div className="main-container">
      <div className="filter-section">
        <div>
          <FilterForm />
        </div>
        <div>
          <Button name="Add New Task" onClick={createModalHandler} />
          {createModalVisibility && (
            <CreateModal onClose={createModalCloseHandler} />
          )}
        </div>
      </div>

      <div className="sort-section">
        <SortForm />
      </div>

      <div className="sort-form"></div>
      <div className="task-box-area">
        <TaskBox
          heading="Pending"
          bgcolor="#ABA8A2"
          tasks={tasks.pendingTasks}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("pendingTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="In Progress"
          bgcolor="#F2B32B"
          tasks={tasks.inProgressTasks}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("inProgressTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Completed"
          bgcolor="#65CD12"
          tasks={tasks.completedTasks}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("completedTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Deployed"
          bgcolor="#102C75"
          tasks={tasks.deployedTasks}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("deployedTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Deferred"
          bgcolor="#f6a192"
          tasks={tasks.deferredTasks}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("deferredTasks", updatedTasks, droppedTask)
          }
        />
        <AddBox />
      </div>
    </div>
  );
};

export default MainContainer;
