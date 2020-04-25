import styled from "styled-components";

// svg
import { ReactComponent as LogoSVG } from "../../assets/svg/logo.svg";
import { ReactComponent as MenuSVG } from "../../assets/svg/menu icon.svg";

export const HeaderContainer = styled.header`
  grid-column: full-start / full-end;
  height: 60px;
  box-shadow: 0rem 0.2rem 0.4rem var(--cl-shadow);

  @media only screen and (max-width: 360px) {
    height: 40px;
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  max-width: 1170px;
  height: 60px;
  margin: 0 auto;
  padding: 0 3rem;
  background-color: var(--cl-white);

  @media only screen and (max-width: 768px) {
    padding: 0 3.4rem;
  }

  @media only screen and (max-width: 360px) {
    height: 40px;
    padding: 0 2rem;
  }
`;

export const HeaderLogo = styled.div`
  display: grid;
`;

export const HeaderLogoSVG = styled(LogoSVG)`
  height: 4rem;
  //   width: 20rem;
`;

export const HeaderLinks = styled.div`
  display: grid;
  justify-items: end;
`;

export const HeaderUL = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderLI = styled.li`
  font-size: 1.45rem;
  &:not(:last-child) {
    margin-right: 2.6rem;
  }
`;

export const HeaderBurger = styled.div`
  display: grid;
  justify-content: end;
`;

export const HeaderMenuSVG = styled(MenuSVG)`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;

  & path {
    transition: fill 0.3s;
  }

  &:hover path {
    fill: var(--cl-primary);
  }
`;
