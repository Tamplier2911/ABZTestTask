// import "./FileInput.scss";
import React from "react";

// js render css
import {
  FileInputContainer,
  FileInputLabel,
  FileInputBrowse,
  FileInputFileName,
  FileInputButton,
  FileInputElement,
  FileInputError,
} from "./FileInputStyles";

const FileInput = ({
  onInputChange,
  label,
  error,
  id,
  fileName,
  ...otherProps
}) => {
  return (
    <FileInputContainer>
      {label ? <FileInputLabel>{label}</FileInputLabel> : null}
      <FileInputBrowse error={error} htmlFor={id}>
        <FileInputFileName>
          {fileName ? fileName.name : "Upload your photo"}
        </FileInputFileName>
        <FileInputButton>Browse</FileInputButton>
      </FileInputBrowse>
      <FileInputElement
        id={id}
        onChange={(e) => onInputChange(e)}
        {...otherProps}
        className="fileInput__input"
      />
      {error ? <FileInputError>{error}</FileInputError> : null}
    </FileInputContainer>
  );
};

export default FileInput;
