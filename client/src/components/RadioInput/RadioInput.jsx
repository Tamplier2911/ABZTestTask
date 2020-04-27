// import "./RadioInput.scss";
import React from "react";

// js render css
import {
  RadioInputContainer,
  RadioInputElement,
  RadioCheckmark,
  RadioInputLabel,
} from "./RadioInputStyles";

const RadioInput = ({ onInputChange, label, position, ...otherProps }) => {
  const checked = position === otherProps.id.slice(0, 1);
  return (
    <RadioInputContainer>
      <RadioInputElement onChange={(e) => onInputChange(e)} {...otherProps} />
      <RadioCheckmark checked={checked} />
      {label ? (
        <RadioInputLabel htmlFor={otherProps.id}>{label}</RadioInputLabel>
      ) : null}
    </RadioInputContainer>
  );
};

export default RadioInput;
