// import "./LandingPage.scss";
import React from "react";

// components
import SectionHero from "../../components/SectionHero/SectionHero";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import SectionUsers from "../../components/SectionUsers/SectionUsers";
import SectionRegister from "../../components/SectionRegister/SectionRegister";

// js rendering css
import { LandingPageContainer } from "./LandingPageStyles";

const LandingPge = ({ width }) => {
  return (
    <LandingPageContainer>
      <SectionHero width={width} />
      <SectionAbout />
      <SectionUsers />
      <SectionRegister />
    </LandingPageContainer>
  );
};

export default LandingPge;
