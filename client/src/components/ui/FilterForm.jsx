import React, { useState } from "react";
import "./FilterForm.css";
import { MdDeleteSweep } from "react-icons/md";

const FilterForm = ({ setFilterValues }) => {
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const clearFilterHandler = (e) => {
    e.preventDefault();
    setAssignee("");
    setPriority("");
    setDate("");
    setFilterValues({ assignee: "", priority: "", date: "" });
  };

  const handleAssigneeChange = (event) => {
    const value = event.target.value;
    setAssignee(value);
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      assignee: value,
    }));
  };

  const handlePriorityChange = (event) => {
    const value = event.target.value;
    setPriority(value);
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      priority: value,
    }));
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      date: value,
    }));
  };

  return (
    <div className="filter-form">
      <div>
        <form method="post" action="/">
          <label className="filer-form-label">Filter By: </label>
          <input
            className="assignee-input"
            placeholder="Assignee Name"
            value={assignee}
            onChange={handleAssigneeChange}
          />
          <select
            className="priority-input"
            name="priority"
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <input
            className="date-input"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </form>
      </div>
      <div>
        <button className="clear-filter-button" onClick={clearFilterHandler}>
          <MdDeleteSweep />
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
