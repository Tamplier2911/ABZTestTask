import styled from "styled-components";

export const RegisterFormElement = styled.form`
  display: grid;
  grid-row-gap: 5.3rem;
  min-width: 47rem;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    min-width: 52rem;
    grid-row-gap: 6.4rem;
  }

  @media only screen and (max-width: 625px) {
    min-width: 100%;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 7rem;
  }
`;

export const RegisterFormRadioHolder = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 0.6rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

export const RegisterFormRadioError = styled.span`
  position: absolute;
  right: 0.2rem;
  color: var(--cl-form-err);
  font-size: 1.2rem;
`;

export const RegisterFormSubmit = styled.button`
  cursor: pointer;
  justify-self: center;
  width: 21rem;
  font-size: 1.8rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  outline: none;
  transition: background-color 0.3s;

  color: var(--cl-white);
  background-color: var(--cl-primary);

  &:hover {
    background-color: var(--cl-btn-hover);
  }

  @media only screen and (max-width: 768px) {
    width: 23.4rem;
  }

  @media only screen and (max-width: 360px) {
    width: 26rem;
    padding: 1.3rem 2rem;
  }
`;
