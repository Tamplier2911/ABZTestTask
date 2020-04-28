// import "./Header.scss";
import React from "react";
import jump from "jump.js";

// redux
import { connect } from "react-redux";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// components
import GenericLink from "../GenericLink/GenericLink";

// js rendering css
import {
  StickyHead,
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
    <StickyHead>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogo>
            <HeaderLogoSVG onClick={() => jump("#hero")} />
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
    </StickyHead>
  );
};

export default connect(null, { toggleSidenav })(Header);
