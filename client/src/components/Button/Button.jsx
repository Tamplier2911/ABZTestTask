import "./Button.scss";
import React from "react";

// js rendering css
import {} from "./ButtonStyles";

const Button = ({ text, type, action }) => (
  <button type={type} onClick={() => action()} className="button">
    {text}
  </button>
);

export default Button;
