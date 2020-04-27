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
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
      <FormInputElement
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
