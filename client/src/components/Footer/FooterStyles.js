import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  align-items: center;
  grid-column: full-start / full-end;
  height: 6rem;
  box-shadow: 0rem -0.1rem 0.4rem var(--cl-shadow);
`;

export const FooterContent = styled.div`
  max-width: 117rem;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
