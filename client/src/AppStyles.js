import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    [full-start]
    minmax(0rem, 1fr)
    [center-start] repeat(
      10,
      [col-start] minmax(min-content, 11.7rem) [col-end]
    )
    [center-end]
    minmax(0rem, 1fr)
    [full-end];

  @media only screen and (max-width: 26.563em) {
    grid-template-columns:
      [full-start]
      1fr
      [center-start] repeat(
        10,
        [col-start] minmax(min-content, 11.7rem) [col-end]
      )
      [center-end]
      1fr
      [full-end];
  }
`;

export const AppMain = styled.main`
  grid-column: center-start / center-end;
`;
