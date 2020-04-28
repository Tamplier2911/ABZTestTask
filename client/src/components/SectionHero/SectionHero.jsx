// import "./SectionHero.scss";
import React from "react";
import jump from "jump.js";
import { useMediaQuery } from "react-responsive";

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

const SectionHero = ({ width, id }) => {
  const { header, paragraph, btn } = getRequiredContent(width);
  const client = getClient(width);
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <SectionHeroContainer client={client} retina={isRetina} id={id}>
      <SectionHeroLeft>
        <HeadlineLarge text={header} />
        <Paragraph text={paragraph} />
        <Button
          text={btn}
          type={"button"}
          action={() => jump("#register", { offset: 100 })}
        />
      </SectionHeroLeft>
      <SectionHeroRight />
    </SectionHeroContainer>
  );
};

export default SectionHero;
