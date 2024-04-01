// MainContainer.js
import React, { useState, useEffect } from "react";
import "./MainContainer.css";
import TaskBox from "../reusables/cards/TaskBox";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";
import Button from "../reusables/buttons/Button";
import CreateModal from "../reusables/modal/CreateModal";
import AddBox from "../reusables/cards/AddBox";
import axios from "axios";
import baseURL from "../baseURL";

const MainContainer = () => {
  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  const [taskCategories, setTaskCategories] = useState({
    pendingTasks: [],
    inProgressTasks: [],
    completedTasks: [],
    deployedTasks: [],
    deferredTasks: [],
  });
  const [filterValues, setFilterValues] = useState({
    assignee: "",
    priority: "",
    dateRange: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/tasks/tasks`);
        const tasks = response.data;
        const categorizedTasks = {
          pendingTasks: tasks.filter((task) => task.type === "pendingTasks"),
          inProgressTasks: tasks.filter(
            (task) => task.type === "inProgressTasks"
          ),
          completedTasks: tasks.filter(
            (task) => task.type === "completedTasks"
          ),
          deployedTasks: tasks.filter((task) => task.type === "deployedTasks"),
          deferredTasks: tasks.filter((task) => task.type === "deferredTasks"),
        };
        setTaskCategories(categorizedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [filterValues, taskCategories]);

  const createModalHandler = () => {
    setCreateModalVisibility(true);
  };

  const createModalCloseHandler = () => {
    setCreateModalVisibility(false);
  };

  const handleDrop = (category, updatedTasks, droppedTask) => {
    const updatedTaskList = {
      ...taskCategories,
      [category]: updatedTasks.concat(droppedTask),
    };

    const previousCategory = Object.keys(taskCategories).find((key) =>
      taskCategories[key].find((task) => task.id === droppedTask.id)
    );

    updatedTaskList[previousCategory] = updatedTaskList[
      previousCategory
    ].filter((task) => task.id !== droppedTask.id);

    setTaskCategories(updatedTaskList);
  };

  // Filter and sort tasks based on filter values and priority
  const filteredAndSortedTasks = (category) => {
    const { assignee, priority } = filterValues;
    let filtered = taskCategories[category];

    // Filter by assignee
    if (assignee) {
      filtered = filtered.filter((task) =>
        task.assignee.toLowerCase().includes(assignee.toLowerCase())
      );
    }

    // Filter by priority
    if (priority && priority !== "All") {
      filtered = filtered.filter((task) => task.priority === priority);
    }

    // Sort by priority
    filtered.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority === "P0") return -1;
      if (b.priority === "P0") return 1;
      if (a.priority === "P1" && b.priority === "P2") return -1;
      return 1;
    });

    return filtered;
  };

  return (
    <div className="main-container">
      <div className="filter-section">
        <div>
          <FilterForm setFilterValues={setFilterValues} />
        </div>
        <div>
          <Button name="Add New Task" onClick={createModalHandler} />
          {createModalVisibility && (
            <CreateModal onClose={createModalCloseHandler} />
          )}
        </div>
      </div>

      <div className="sort-section">
        <SortForm setFilterValues={setFilterValues} />
      </div>

      <div className="task-box-area">
        <TaskBox
          heading="Pending"
          bgcolor="#ABA8A2"
          tasks={filteredAndSortedTasks("pendingTasks")}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("pendingTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="In Progress"
          bgcolor="#F2B32B"
          tasks={filteredAndSortedTasks("inProgressTasks")}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("inProgressTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Completed"
          bgcolor="#65CD12"
          tasks={filteredAndSortedTasks("completedTasks")}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("completedTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Deployed"
          bgcolor="#102C75"
          tasks={filteredAndSortedTasks("deployedTasks")}
          onDrop={(updatedTasks, droppedTask) =>
            handleDrop("deployedTasks", updatedTasks, droppedTask)
          }
        />
        <TaskBox
          heading="Deferred"
          bgcolor="#f6a192"
          tasks={filteredAndSortedTasks("deferredTasks")}
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
