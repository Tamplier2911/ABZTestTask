// import "./GenericLink.scss";
import React from "react";

import { GenericLinkComponent } from "./GenericLinkStyles";

const GenericLink = ({ path, text, action }) => (
  <GenericLinkComponent
    href={path}
    onClick={(e) =>
      action
        ? action(e)
        : (e) => {
            e.preventDefault();
          }
    }
  >
    {text}
  </GenericLinkComponent>
);

export default GenericLink;
