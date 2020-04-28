// import "./SectionAbout.scss";
import React from "react";
import jump from "jump.js";

// components
import HeadlineMedium from "../HeadlineMedium/HeadlineMedium";
import HeadlineSmall from "../HeadlineSmall/HeadlineSmall";
import GenericLink from "../GenericLink/GenericLink";
import Paragraph from "../Paragraph/Paragraph";

// js rendering css
import {
  SectionAboutContainer,
  SectionAboutHeader,
  SectionAboutContent,
  SectionAboutWrap,
  SectionAboutSVG,
  SectionAboutText,
} from "./SectionAboutStyles";

// constants
import aboutConstants from "./SectionAboutConstants";

const SectionAbout = ({ id }) => {
  const { header, headerSub, block_1, block_2, link } = aboutConstants;
  return (
    <SectionAboutContainer id={id}>
      <SectionAboutHeader>
        <HeadlineMedium text={header} />
      </SectionAboutHeader>
      <SectionAboutContent>
        <SectionAboutWrap>
          <SectionAboutSVG />
        </SectionAboutWrap>
        <SectionAboutText>
          <HeadlineSmall text={headerSub} />
          <Paragraph text={block_1} />
          <Paragraph text={block_2} />
          <GenericLink
            path={"/"}
            text={link}
            action={(e) => {
              e.preventDefault();
              jump("#register", { offset: 100 });
            }}
          />
        </SectionAboutText>
      </SectionAboutContent>
    </SectionAboutContainer>
  );
};

export default SectionAbout;
