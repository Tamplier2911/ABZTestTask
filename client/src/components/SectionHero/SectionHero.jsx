import "./SectionHero.scss";
import React from "react";

// components
import HeadlineLarge from "../HeadlineLarge/HeadlineLarge";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

// js rendering css
import {} from "./SectionHeroStyles";

const getRequiredContent = (width) => {
  if (width > 425) {
    return {
      header: "Test assignment for frontend developer position",
      paragraph: `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider 
                  and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale 
                  in the banner area on the different screens`,
      btn: "Sign up now",
    };
  } else {
    return {
      header: "Test assignment for frontend developer position",
      paragraph: `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.`,
      btn: "Sign up now",
    };
  }
};

const SectionHero = ({ width }) => {
  const { header, paragraph, btn } = getRequiredContent(width);
  return (
    <section className="hero">
      <div className="hero__left">
        <HeadlineLarge text={header} />
        <Paragraph text={paragraph} />
        <Button
          text={btn}
          type={"button"}
          action={() => {
            /* add later */
          }}
        />
      </div>
      <div className="hero__right"></div>
    </section>
  );
};

export default SectionHero;
