import styled from "styled-components";

import bgdesk from "../../assets/jpg/banner-desktop-min.jpg";
import bgtab from "../../assets/jpg/banner-tablet-min.jpg";
import bgmob from "../../assets/jpg/banner-mobile-min.jpg";

const getProperImage = (props) => {
  const { client } = props;
  if (client === "desktop") {
    return `background-image: url(${bgdesk});`;
  } else if (client === "tablet") {
    return `background-image: url(${bgtab});`;
  }
  return `background-image: url(${bgmob});`;
};

export const SectionHeroContainer = styled.section`
  ${getProperImage}
  display: grid;
  grid-template-columns: 7.5fr 6fr;
  // min-height: 64.7vh;
  min-height: 60rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2rem 3rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 3.4rem;
    grid-template-columns: 11fr 6fr;
    min-height: 55.5rem;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    min-height: 50rem;
  }

  @media only screen and (max-width: 360px) {
    padding: 2rem 2rem;
  }
`;

export const SectionHeroLeft = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    margin-top: 8.6rem;
    @media only screen and (max-width: 768px) {
      margin-top: 4.7rem;
      max-width: 46rem;
      letter-spacing: 0.23rem;
    }

    @media only screen and (max-width: 425px) {
      text-align: center;
    }

    @media only screen and (max-width: 360px) {
      margin-top: 6.6rem;
    }
  }

  & p {
    margin-top: 2.2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.6rem;
      margin-top: 3rem;
      max-width: 50rem;
      letter-spacing: 0.085rem;
    }

    @media only screen and (max-width: 425px) {
      text-align: center;
    }

    @media only screen and (max-width: 360px) {
      margin-top: 2.5rem;
      max-width: 42rem;
      letter-spacing: 0.095rem;
    }
  }

  & button {
    margin-top: 3.3rem;
    @media only screen and (max-width: 768px) {
      margin-top: 3.7rem;
    }

    @media only screen and (max-width: 425px) {
      margin: 3.2rem auto 0 auto;
    }
  }
`;

export const SectionHeroRight = styled.div``;
