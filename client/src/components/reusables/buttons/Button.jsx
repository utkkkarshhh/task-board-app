import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="buttoncomp" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
