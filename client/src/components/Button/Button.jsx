// import "./Button.scss";
import React from "react";

// js rendering css
import { ButtonComponent, DisabledButtonComponent } from "./ButtonStyles";

const Button = ({ text, type, action, disabled }) =>
  disabled ? (
    <DisabledButtonComponent type={type} onClick={() => {}}>
      {text}
    </DisabledButtonComponent>
  ) : (
    <ButtonComponent type={type} onClick={() => action()}>
      {text}
    </ButtonComponent>
  );

export default Button;
