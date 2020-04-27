import styled from "styled-components";

const isErrored = (props) => {
  const { err } = props;
  if (err) {
    return `
            border: 0.1rem solid var(--cl-form-err);
            &:focus {
                outline: none;
                box-shadow: 0rem 0rem 0.3rem var(--cl-form-outline-err-shadow);
            }
        `;
  }
  return `
        border: 0.1rem solid var(--cl-form-focus);
        &:focus {
            outline: 0.1rem solid var(--cl-form-outline);
            box-shadow: 0rem 0rem 0.2rem var(--cl-form-outline);
        }
    `;
};

export const FormInputContainer = styled.div`
  display: grid;
  position: relative;
`;

export const FormInputLabel = styled.label`
  position: absolute;
  top: -3.4rem;
  left: -0.2rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const FormInputElement = styled.input`
  ${isErrored}
  padding: 1rem 1rem;
  background-color: transparent !important;
  border-radius: 5px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: var(--cl-primary) !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::-moz-focus-inner {
    //   border: 0;
    //   outline: none;
  }

  &:invalid {
    //   box-shadow: none;
  }
`;

export const FormInputError = styled.span`
  position: absolute;
  right: 0rem;
  bottom: -2.2rem;
  font-size: 1.2rem;
  color: var(--cl-form-err);
`;

export const FormInputScribe = styled.span`
  position: absolute;
  bottom: -2.2rem;
  font-size: 1.2rem;
`;
