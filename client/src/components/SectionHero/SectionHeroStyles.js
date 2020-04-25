import styled from "styled-components";

import bgdesk from "../../assets/png/banner-desktop-min.jpg";
import bgtab from "../../assets/png/banner-tablet-min.jpg";
import bgmob from "../../assets/png/banner-mobile-min.jpg";

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
