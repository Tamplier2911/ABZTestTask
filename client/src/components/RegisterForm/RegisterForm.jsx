// import "./RegisterForm.scss";
import React, { useState } from "react";

// components
import FormInput from "../FormInput/FormInput";
import RadioInput from "../RadioInput/RadioInput";
import FileInput from "../FileInput/FileInput";

// js render css
import {
  RegisterFormElement,
  RegisterFormRadioHolder,
  RegisterFormRadioError,
  RegisterFormSubmit,
} from "./RegisterFormStyles";

const RegisterForm = ({ positions }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    nameErr: "",
    email: "",
    emailErr: "Email does not match pattern.",
    phone: "",
    phoneErr: "Phone does not match pattern.",
    position: "",
    positionErr: "Position must be chosen.",
    photo: null,
    photoErr: "Please chose image to download.",
  });
  const {
    name,
    nameErr,
    email,
    emailErr,
    phone,
    phoneErr,
    position,
    positionErr,
    photo,
    photoErr,
  } = userCredentials;

  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo")
      return setUserCredentials({ ...userCredentials, [name]: files[0] });
    return setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validation and error handling here
    console.log(userCredentials);
    console.log("Submitted!");
  };

  return (
    <RegisterFormElement onSubmit={(e) => onSubmit(e)} autoComplete="off">
      <FormInput
        onInputChange={onInputChange}
        value={name}
        name={"name"}
        type="text"
        label="Name"
        error={nameErr}
        placeholder="Your name"
        required
      />
      <FormInput
        onInputChange={onInputChange}
        value={email}
        name={"email"}
        type="email"
        label="Email"
        error={emailErr}
        placeholder="Your email"
        required
      />
      <FormInput
        onInputChange={onInputChange}
        value={phone}
        name={"phone"}
        type="tel"
        label="Phone number"
        error={phoneErr}
        placeholder="+380(__)_______"
        pattern="^\+?3?8?(0\d{9})$"
        required
      />
      <RegisterFormRadioHolder>
        Select your position:
        {positions.map((pos) => {
          const { id, name } = pos;
          return (
            <RadioInput
              onInputChange={onInputChange}
              value={id}
              name={"position"}
              type="radio"
              label={name}
              key={id + "radio"}
              id={id + "radio"}
              position={position}
            />
          );
        })}
        {positionErr ? (
          <RegisterFormRadioError>{positionErr}</RegisterFormRadioError>
        ) : null}
      </RegisterFormRadioHolder>
      <FileInput
        onInputChange={onInputChange}
        fileName={photo}
        name={"photo"}
        type="file"
        label={"Photo"}
        error={photoErr}
        id={"fileinput-register"}
        required
      />
      <RegisterFormSubmit type="submit" value="Sign up now" />
    </RegisterFormElement>
  );
};

export default RegisterForm;
