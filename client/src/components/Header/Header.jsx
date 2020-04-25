import "./Header.scss";
import React from "react";

// components
import GenericLink from "../GenericLink/GenericLink";

// svg
import { ReactComponent as LogoSVG } from "../../assets/svg/logo.svg";
import { ReactComponent as MenuSVG } from "../../assets/svg/menu icon.svg";

// js rendering css
import {} from "./HeaderStyles";

const linkConstants = [
  { path: "/", text: "About me" },
  { path: "/", text: "Relationships" },
  { path: "/", text: "Requirements" },
  { path: "/", text: "Users" },
  { path: "/", text: "Sign Up" },
];

const Header = ({ width }) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content--logo">
          <LogoSVG className="header_logosvg" />
        </div>
        {width > 768 ? (
          <div className="header__content--links">
            <ul className="header__content--ul">
              {linkConstants.map((link, i) => (
                <li key={i} className="header__content--li">
                  <GenericLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="header__content--burger">
            <MenuSVG className="header__menusvg" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
