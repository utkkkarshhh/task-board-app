import React, { useState } from "react";
import "./FilterForm.css";

const FilterForm = () => {
  const [dateRange, setDateRange] = useState("");

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };
  return (
    <div className="filter-form">
      <div>
        <form method="post" action="/">
          <label className="filer-form-label">Filter By: </label>
          <input className="assignee-input" placeholder="Assignee Name"></input>
          <select className="priority-input" name="priority" id="priority">
            <option value="" disabled selected hidden>
              Priority
            </option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <input
            className="date-input"
            type="text"
            placeholder="DD/MM/YYYY - DD/MM/YYYY"
            value={dateRange}
            onChange={handleDateRangeChange}
          />
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
