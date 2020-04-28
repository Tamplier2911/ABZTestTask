import styled, { css } from "styled-components";

const sharedStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  display: block;
  border-radius: 50%;
  background-color: var(--cl-white);
  transform: translate(-50%, -50%);
`;

const getCheckedLabel = (props) => {
  const { checked } = props;
  if (checked) {
    return `color: var(--cl-primary);`;
  }
  return `color: var(--cl-font);`;
};

const getCheckedStyle = (props) => {
  const { checked } = props;

  if (checked) {
    return `
        background-color: var(--cl-radio-checked-bg);
        &::after {
            ${sharedStyles}
            width: 0.8rem;
            height: 0.8rem;
        }
    `;
  }

  return `
        background-color: var(--cl-radio-unchecked-bg);
        &::after {
            ${sharedStyles}
            width: 1.5rem;
            height: 1.5rem;
        }
    `;
};

export const RadioInputContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
`;

export const RadioInputElement = styled.input`
  width: 1.8rem;
  height: 1.8rem;
`;

export const RadioCheckmark = styled.div`
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  ${getCheckedStyle}
`;

export const RadioInputLabel = styled.label`
  cursor: pointer;
  justify-self: start;
  transition: color 0.3s;
  ${getCheckedLabel}

  &:hover {
    color: var(--cl-primary);
  }
`;
