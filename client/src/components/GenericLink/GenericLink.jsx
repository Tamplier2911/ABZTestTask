import "./GenericLink.scss";
import React from "react";

import {} from "./GenericLinkStyles";

const GenericLink = ({ path, text }) => (
  <a href={path} className="genericLink">
    {text}
  </a>
);

export default GenericLink;
