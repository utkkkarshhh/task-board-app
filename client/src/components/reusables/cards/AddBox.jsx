import React from "react";
import "./AddBox.css";
import Button from "../buttons/Button";
import { MdOutlineAddCircle } from "react-icons/md";

const AddBox = () => {
  return (
    <div className="addBox">
      <div className="addBoxheader">
        <h3 className="headerTitle">Add a new card</h3>
      </div>
      <div className="addBoxBody">
        <p className="addIcon">
          <MdOutlineAddCircle />
        </p>
        <p className="addSectionText">Add a new section :)</p>
        <Button name="Click Here" />
      </div>
    </div>
  );
};

export default AddBox;
