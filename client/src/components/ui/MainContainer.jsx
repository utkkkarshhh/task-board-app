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

const MainContainer = () => {
  const [createModalVisibility, setCreateModalVisibility] = useState(false);

  const createModalHandler = () => {
    setCreateModalVisibility(true);
  };

  const createModalCloseHandler = () =>{
    setCreateModalVisibility(false);
  }

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
        <TaskBox heading="Pending" bgcolor="#ABA8A2" tasks={pendingTasks} />
        <TaskBox
          heading="In Progress"
          bgcolor="#F2B32B"
          tasks={inProgressTasks}
        />
        <TaskBox heading="Completed" bgcolor="#65CD12" tasks={completedTasks} />
        <TaskBox heading="Deployed" bgcolor="#102C75" tasks={deployedTasks} />
        <TaskBox heading="Deferred" bgcolor="#f6a192" tasks={deferredTasks} />
      </div>
    </div>
  );
};

export default MainContainer;
