import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="menu-header">
      <div className="logo">
        <h1 className="logo-text">Task Board</h1>
      </div>
      <div className="main-menu">
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Header;
