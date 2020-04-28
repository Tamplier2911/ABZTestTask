// import "./FormInput.scss";
import React from "react";

// js render css
import {
  FormInputContainer,
  FormInputLabel,
  FormInputElement,
  FormInputError,
  FormInputScribe,
} from "./FormInputStyles";

const FormInput = ({ onInputChange, label, error, ...otherProps }) => {
  return (
    <FormInputContainer>
      {label ? (
        <FormInputLabel htmlFor={`form-${otherProps.name}`}>
          {label}
        </FormInputLabel>
      ) : null}
      <FormInputElement
        id={`form-${otherProps.name}`}
        err={error}
        onChange={(e) => onInputChange(e)}
        {...otherProps}
      />
      {error ? <FormInputError>{error}</FormInputError> : null}
      {otherProps.type === "tel" ? (
        <FormInputScribe>Enter phone number in open format</FormInputScribe>
      ) : null}
    </FormInputContainer>
  );
};

export default FormInput;
