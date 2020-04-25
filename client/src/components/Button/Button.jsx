// import "./Button.scss";
import React from "react";

// js rendering css
import { ButtonComponent } from "./ButtonStyles";

const Button = ({ text, type, action }) => (
  <ButtonComponent type={type} onClick={() => action()}>
    {text}
  </ButtonComponent>
);

export default Button;
