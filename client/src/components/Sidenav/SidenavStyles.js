import styled, { css } from "styled-components";

// svg
import { ReactComponent as LogoSVG } from "../../assets/svg/logo.svg";

export const animateSidenav = css`
  @keyframes animateSidenav {
    0% {
      width: 0;
    }
    100% {
      width: 30rem;
    }
  }
`;

export const animateSidenavContent = css`
  @keyframes animateSidenavContent {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const blockSharedStyles = css`
  display: grid;
  grid-row-gap: 2rem;
  animation-fill-mode: backwards;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 0.1rem;
    background-color: var(--cl-sidenav-line);
  }
`;

const renderSidenav = (props) => {
  const { hidden } = props;
  if (hidden) return `display: none`;
  return `
    position: fixed;
    display: grid;
    width: 100vw;
    height: 100vh;
    background-color: var(--cl-sidenav-bg);
    z-index: 50;
  `;
};

export const SidenavContainer = styled.div`
  ${renderSidenav}
`;

export const SidenavWindow = styled.div`
  ${animateSidenav}
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 2rem;
  width: 30rem;
  height: 100vh;
  background-color: var(--cl-white);
  overflow-y: scroll;
  overflow-x: hidden;

  animation: animateSidenav 0.5s;

  &::-webkit-scrollbar {
    width: 0.2rem;
    background-color: var(--cl-scroll-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to bottom,
      var(--cl-primary),
      var(--cl-secondary)
    );
    border-radius: 5rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
  }
`;

export const SidenavHeader = styled.div`
  ${animateSidenavContent}
  display: grid;
  align-items: center;
  justify-items: center;
  animation: animateSidenavContent 0.5s 0.4s;
  animation-fill-mode: backwards;
`;

export const SidenavLogo = styled(LogoSVG)`
  margin-top: 2rem;
`;

export const SidenavTop = styled.div`
  ${animateSidenavContent}
  animation: animateSidenavContent 0.5s 0.6s;
  ${blockSharedStyles}
`;

export const SidenavMid = styled.div`
  ${animateSidenavContent}
  animation: animateSidenavContent 0.5s 0.8s;
  ${blockSharedStyles}
`;

export const SidenavBot = styled.div`
  ${animateSidenavContent}
  animation: animateSidenavContent 0.5s 1s;
  ${blockSharedStyles}
`;

export const SidenavUL = styled.ul`
  display: grid;
  grid-row-gap: 1.4rem;
  list-style: none;
`;

export const SidenavLI = styled.li`
  margin-left: 2rem;
  font-weight: bold;

  & a {
    &:hover {
      color: var(--cl-sidenav-linkhover) !important;
    }
  }
`;
