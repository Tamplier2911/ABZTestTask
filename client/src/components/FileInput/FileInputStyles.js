import styled from "styled-components";

const isErrored = (props) => {
  const { error } = props;
  if (error) {
    return `border: 0.1rem solid var(--cl-form-err);`;
  }
  return `border: 0.1rem solid var(--cl-form-focus);`;
};

export const FileInputContainer = styled.div`
  position: relative;
`;

export const FileInputLabel = styled.label`
  position: absolute;
  top: -3.4rem;
  left: -0.2rem;
  font-size: 1.5rem;
`;

export const FileInputBrowse = styled.label`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr min-content;
  border-radius: 5px;
  ${isErrored}
`;

export const FileInputFileName = styled.div`
  display: grid;
  align-items: center;
  margin-left: 1rem;
  font-size: 1.4rem;

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const FileInputButton = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  background-color: var(--cl-file-button);
  padding: 0.6rem 1rem;
  transition: background-color 0.3s;

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }

  &:hover {
    background-color: var(--cl-file-button-hv);
  }
`;

export const FileInputElement = styled.input`
  position: absolute;
  // display: none;
  opacity: 0;
  transform: scale(0);
`;

export const FileInputError = styled.span`
  position: absolute;
  right: 0rem;
  bottom: -2.2rem;
  font-size: 1.2rem;
  color: var(--cl-form-err);
`;
