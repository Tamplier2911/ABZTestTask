import styled, { css } from "styled-components";

const modalAnimation = css`
  @keyframes animateModal {
    0% {
      opacity: 0;
      transform: translate(0%, -50%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }
`;

const renderModal = (props) => {
  const { hidden } = props;
  if (hidden) {
    return `display: none`;
  }
  return `
    position: fixed;
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--cl-modal-bg);
    z-index: 100;
    `;
};

export const ModalContainer = styled.div`
  ${renderModal}
`;

export const ModalWindow = styled.div`
  ${modalAnimation}
  display: grid;
  align-items: center;
  width: 40rem;
  min-height: 22rem;
  padding: 1rem 2rem;
  background-color: var(--cl-white);

  animation: animateModal 0.5s;

  @media only screen and (max-width: 350px) {
    width: 30rem;
    height: 35rem;
  }

  @media only screen and (max-width: 260px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const ModalTop = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;

export const ModalTopHeader = styled.h4`
  font-size: 2.2rem;
`;

export const ModalTopClose = styled.div`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--cl-btn-text);
  }
`;

export const ModalMid = styled.div`
  display: grid;
  grid-row-gap: 2rem;

  &::before {
    content: "";
    display: inline-block;
    height: 0.1rem;
    width: 100%;
    background-color: var(--cl-modal-line);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 0.1rem;
    width: 100%;
    background-color: var(--cl-modal-line);
  }
`;

export const ModalMidContent = styled.div``;

export const ModalBot = styled.div`
  justify-self: end;
`;

export const ModalBotBtn = styled.div`
  & button {
    width: 10rem;
  }
`;
