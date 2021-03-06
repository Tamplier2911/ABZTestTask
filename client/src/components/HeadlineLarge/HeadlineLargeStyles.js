import styled from "styled-components";

export const HeadlineLargeComponent = styled.h1`
  color: var(--cl-white);
  text-transform: uppercase;
  line-height: 1.1;
  letter-spacing: -0.05rem;
  //   font-weight: 300;
  font-size: var(--font-h1-desc-fs);
  // line-height: var(--font-h1-desc-fs);

  @media only screen and (max-width: 768px) {
    font-size: var(--font-h1-tab-fs);
    line-height: 1.23;
    // line-height: var(--font-h1-tab-lh);
  }

  @media only screen and (max-width: 425px) {
    font-size: 3.5rem;
    font-weight: 300;
    // font-size: var(--font-h1-mob-fs);
    // line-height: var(--font-h1-mob-lh);
  }
`;
