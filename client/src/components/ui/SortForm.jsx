// SortForm.js
import React from "react";
import "./SortForm.css";

const SortForm = ({ setFilterValues }) => {
  const handlePriorityChange = (event) => {
    const value = event.target.value;
    setFilterValues((prevFilterValues) => ({
      ...prevFilterValues,
      priority: value,
    }));
  };

  return (
    <div className="sort-form">
      <div>
        <form method="post" action="/">
          <label className="sort-form-label">Sort By: </label>
          <select
            className="priority-input-sort"
            name="priority"
            id="priority"
            onChange={handlePriorityChange}
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="All">All</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SortForm;
