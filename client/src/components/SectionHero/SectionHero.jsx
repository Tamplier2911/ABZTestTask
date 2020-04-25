import "./SectionHero.scss";
import React from "react";

// components
import HeadlineLarge from "../HeadlineLarge/HeadlineLarge";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

// utils
import getClient from "../../utils/getClient";

// js rendering css
import { SectionHeroContainer } from "./SectionHeroStyles";

// constants
import getRequiredContent from "./SectionHeroConstants";

const SectionHero = ({ width }) => {
  const { header, paragraph, btn } = getRequiredContent(width);
  const client = getClient(width);
  return (
    <SectionHeroContainer client={client}>
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
    </SectionHeroContainer>
  );
};

export default SectionHero;
