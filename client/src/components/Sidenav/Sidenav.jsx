// import "./Sidenav.scss";
import React from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";

// components
import GenericLink from "../GenericLink/GenericLink";

// js render css
import {
  SidenavContainer,
  SidenavWindow,
  SidenavHeader,
  SidenavLogo,
  SidenavTop,
  SidenavMid,
  SidenavBot,
  SidenavUL,
  SidenavLI,
} from "./SidenavStyles";

// constants
import sidenavConstants from "./SidenavConstants";

const Sidenav = ({ sidenavHidden, toggleSidenav }) => {
  const { b1, b2, b3 } = sidenavConstants;

  return ReactDOM.createPortal(
    <SidenavContainer hidden={sidenavHidden} onClick={() => toggleSidenav()}>
      <SidenavWindow onClick={(e) => e.stopPropagation()}>
        <SidenavHeader>
          <SidenavLogo />
        </SidenavHeader>
        <SidenavTop>
          <SidenavUL>
            {b1.map((link) => {
              const { id, path, text, action } = link;
              return (
                <SidenavLI key={id}>
                  <GenericLink
                    path={path}
                    text={text}
                    action={(e) => {
                      action(e);
                      toggleSidenav();
                    }}
                  />
                </SidenavLI>
              );
            })}
          </SidenavUL>
        </SidenavTop>
        <SidenavMid>
          <SidenavUL>
            {b2.map((link) => {
              const { id, path, text, action } = link;
              return (
                <SidenavLI key={id}>
                  <GenericLink
                    path={path}
                    text={text}
                    action={(e) => {
                      action(e);
                      toggleSidenav();
                    }}
                  />
                </SidenavLI>
              );
            })}
          </SidenavUL>
        </SidenavMid>
        <SidenavBot>
          <SidenavUL>
            {b3.map((link) => {
              const { id, path, text, action } = link;
              return (
                <SidenavLI key={id}>
                  <GenericLink
                    path={path}
                    text={text}
                    action={(e) => {
                      action(e);
                      toggleSidenav();
                    }}
                  />
                </SidenavLI>
              );
            })}
          </SidenavUL>
        </SidenavBot>
      </SidenavWindow>
    </SidenavContainer>,
    document.querySelector("#sidenav")
  );
};

const mapStateToProps = createStructuredSelector({
  sidenavHidden: selectSidenavHidden,
});

export default connect(mapStateToProps, { toggleSidenav })(Sidenav);
