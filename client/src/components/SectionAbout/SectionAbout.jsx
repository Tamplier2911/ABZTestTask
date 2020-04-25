import "./SectionAbout.scss";
import React from "react";

// components
import HeadlineMedium from "../HeadlineMedium/HeadlineMedium";
import HeadlineSmall from "../HeadlineSmall/HeadlineSmall";
import GenericLink from "../GenericLink/GenericLink";
import Paragraph from "../Paragraph/Paragraph";

// svg
import { ReactComponent as IllustrationSVG } from "../../assets/svg/man-laptop-v1.svg";

// js rendering css
import {} from "./SectionAboutStyles";

// constants
const aboutConstants = {
  header: "Let's get acquainted",
  headerSub: "I am cool frontend developer",
  block_1:
    "We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3ds party libraries without any restriction.",
  block_2:
    "If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.",
  link: "Sign up now",
};

const SectionAbout = () => {
  const { header, headerSub, block_1, block_2, link } = aboutConstants;
  return (
    <section className="about">
      <div className="about__header">
        <HeadlineMedium text={header} />
      </div>
      <div className="about__content">
        <div className="about__content--svgwrap">
          <IllustrationSVG className="about__content--svg" />
        </div>
        <div className="about__content--text">
          <HeadlineSmall text={headerSub} />
          <Paragraph text={block_1} />
          <Paragraph text={block_2} />
          <GenericLink path={"/"} text={link} />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
