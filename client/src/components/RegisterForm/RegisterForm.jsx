// import "./RegisterForm.scss";
import React, { useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRegisterIsLoading } from "../../redux/register/register.selectors";
import { registerStart } from "../../redux/register/register.actions";

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

// utils
import validator, { cleanState } from "../../utils/validator";

const RegisterForm = ({ positions, registerStart, isLoading }) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    nameErr: "",
    email: "",
    emailErr: "",
    phone: "",
    phoneErr: "",
    position: "",
    positionErr: "",
    photo: null,
    photoErr: "",
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
    if (name === "photo" && files[0]) {
      // create reader
      const reader = new FileReader();
      // read content of file
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        // initiate the JavaScript Image object
        const image = new Image();
        // set the Base64 string return from FileReader as source
        image.src = e.target.result;
        // validate the File Height and Width
        image.onload = () => {
          files[0].width = image.width;
          files[0].height = image.height;
          setUserCredentials({ ...userCredentials, [name]: files[0] });
        };
      };
      // return setUserCredentials({ ...userCredentials, [name]: files[0] });
      return;
    }
    return setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { failed, errors } = validator(userCredentials);
    if (failed) {
      return setUserCredentials({ ...userCredentials, ...errors });
    }

    // clean up fields if registration is passed
    setUserCredentials(cleanState());

    // perform registration action
    registerStart(userCredentials);
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
      />
      <RegisterFormSubmit type="submit">
        {isLoading ? "Processing..." : "Sign up now"}
      </RegisterFormSubmit>
      {/* <RegisterFormSubmit
        type="submit"
        value={isLoading ? "Processing..." : "Sign up now"}
      /> */}
    </RegisterFormElement>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectRegisterIsLoading,
});

export default connect(mapStateToProps, { registerStart })(RegisterForm);
