// import "./HeadlineSmall.scss";
import React from "react";

// js render css
import { HeadlineSmallComponent } from "./HeadlineSmallStyles";

const HeadlineSmall = ({ text }) => (
  <HeadlineSmallComponent>{text}</HeadlineSmallComponent>
);

export default HeadlineSmall;
