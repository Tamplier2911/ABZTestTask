import styled from "styled-components";

export const GenericLinkComponent = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--cl-font);
    transition: color 0.3s, transform 0.3s, border 0.3s;
  }

  &:hover,
  &:active {
    color: var(--cl-primary);
  }
`;
