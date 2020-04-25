import "./SectionHero.scss";
import React from "react";

// components
import HeadlineLarge from "../HeadlineLarge/HeadlineLarge";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

// js rendering css
import {} from "./SectionHeroStyles";

// constants
import getRequiredContent from "./SectionHeroConstants";

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
