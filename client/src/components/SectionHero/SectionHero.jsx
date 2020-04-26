// import "./SectionHero.scss";
import React from "react";

// components
import HeadlineLarge from "../HeadlineLarge/HeadlineLarge";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

// utils
import getClient from "../../utils/getClient";

// js rendering css
import {
  SectionHeroContainer,
  SectionHeroLeft,
  SectionHeroRight,
} from "./SectionHeroStyles";

// constants
import getRequiredContent from "./SectionHeroConstants";

const SectionHero = ({ width }) => {
  const { header, paragraph, btn } = getRequiredContent(width);
  const client = getClient(width);
  return (
    <SectionHeroContainer client={client}>
      <SectionHeroLeft>
        <HeadlineLarge text={header} />
        <Paragraph text={paragraph} />
        <Button
          text={btn}
          type={"button"}
          action={() => {
            /* add later */
          }}
        />
      </SectionHeroLeft>
      <SectionHeroRight />
    </SectionHeroContainer>
  );
};

export default SectionHero;
