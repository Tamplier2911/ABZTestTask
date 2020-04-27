import styled from "styled-components";

import { ReactComponent as IllustrationSVG } from "../../assets/svg/man-laptop-v1.svg";

export const SectionAboutContainer = styled.section`
  display: grid;
  // padding-top: 14rem;
  grid-row-gap: 4.9rem;
  padding: 14rem 3rem 15rem 3rem;

  @media only screen and (max-width: 768px) {
    padding: 11.5rem 2.3rem 12.5rem 2.3rem;
    grid-row-gap: 6rem;
  }
  @media only screen and (max-width: 425px) {
    padding: 8.4rem 2rem 8.4rem 2rem;
  }
`;

export const SectionAboutHeader = styled.div`
  text-align: center;

  & h2 {
    @media only screen and (max-width: 768px) {
      font-size: 4.5rem;
    }
    @media only screen and (max-width: 425px) {
      font-size: 3.82rem;
    }
  }
`;

export const SectionAboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.33fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1.55fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 1.8rem;
  }
`;

export const SectionAboutWrap = styled.div`
  position: relative;
  @media only screen and (max-width: 700px) {
    min-height: 30rem;
  }
  @media only screen and (max-width: 425px) {
    min-height: 30rem;
  }
`;

export const SectionAboutSVG = styled(IllustrationSVG)`
  position: absolute;
  width: 34rem;
  left: 2.5rem;
  top: -2.8rem;

  @media only screen and (max-width: 940px) {
    width: 25rem;
  }

  @media only screen and (max-width: 768px) {
    width: 27rem;
    left: 1.4rem;
    top: -7.8rem;
  }

  @media only screen and (max-width: 700px) {
    width: 27rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 425px) {
    width: 36rem;
    left: 2.5rem;
    top: -10.2rem;
    transform: none;
  }

  @media only screen and (max-width: 350px) {
    width: 27rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SectionAboutText = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    @media only screen and (max-width: 768px) {
      font-size: 2.6rem;
      letter-spacing: 0.03rem; /* :( */
    }
    @media only screen and (max-width: 425px) {
      font-size: 2.95rem;
    }
  }

  // both paragraphs
  & p {
    color: var(--cl-font);
    margin-top: 1.6rem;

    @media only screen and (max-width: 425px) {
      margin-top: 1.9rem;
      font-size: 1.95rem;
    }
  }

  // second paragph
  & :nth-child(3) {
    margin-top: 2.2rem;
    @media only screen and (max-width: 768px) {
      margin-top: 2.7rem;
    }
    @media only screen and (max-width: 425px) {
      margin-top: 3rem;
    }
  }

  & a {
    margin-top: 3rem;
    font-weight: bold;
    align-self: flex-start;
    color: var(--cl-primary) !important;
    border-bottom: 0.1rem solid transparent;
    @media only screen and (max-width: 768px) {
      margin-top: 3.4rem;
    }

    @media only screen and (max-width: 425px) {
      margin-top: 3.6rem;
      font-size: 2rem;
      margin: 3.6rem auto 0rem auto;
    }

    &:hover {
      color: var(--cl-btn-hover) !important;
      border-bottom: 0.1rem solid var(--cl-btn-hover);
      transform: scale(1.1);
    }
  }
`;
