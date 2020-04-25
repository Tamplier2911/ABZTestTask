// import "./Header.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// components
import GenericLink from "../GenericLink/GenericLink";

// js rendering css
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderLogoSVG,
  HeaderLinks,
  HeaderUL,
  HeaderLI,
  HeaderBurger,
  HeaderMenuSVG,
} from "./HeaderStyles";

import headerConstants from "./HeaderConstants";

const Header = ({ width, toggleSidenav }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <HeaderLogoSVG />
        </HeaderLogo>
        {width > 768 ? (
          <HeaderLinks>
            <HeaderUL>
              {headerConstants.map((link, i) => (
                <HeaderLI key={i}>
                  <GenericLink {...link} />
                </HeaderLI>
              ))}
            </HeaderUL>
          </HeaderLinks>
        ) : (
          <HeaderBurger onClick={() => toggleSidenav()}>
            <HeaderMenuSVG />
          </HeaderBurger>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default connect(null, { toggleSidenav })(Header);
