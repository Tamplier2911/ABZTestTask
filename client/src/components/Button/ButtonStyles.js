import styled, { css } from "styled-components";

const sharedStyles = css`
  cursor: pointer;
  justify-self: start;
  width: 21rem;
  font-size: 1.8rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  outline: none;

  transition: background-color 0.3s;

  @media only screen and (max-width: 768px) {
    width: 23.4rem;
  }

  @media only screen and (max-width: 360px) {
    width: 26rem;
    padding: 1.3rem 2rem;
  }
`;

export const ButtonComponent = styled.button`
  ${sharedStyles}
  color: var(--cl-white);
  background-color: var(--cl-primary);

  &:hover {
    background-color: var(--cl-btn-hover);
  }
`;

export const DisabledButtonComponent = styled.button`
  ${sharedStyles}
  color: var(--cl-btn-text);
  background-color: var(--cl-btn-disabled);

  &:hover {
    background-color: var(--cl-btn-disabled);
  }
`;
