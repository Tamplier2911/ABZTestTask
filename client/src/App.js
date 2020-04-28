// import "./App.scss";
// import React from "react";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUsersCollectionLength } from "./redux/users/users.selectors";
import { fetchUsersStart } from "./redux/users/users.actions";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";

// pages
import LandingPage from "./pages/LandingPage/LandingPage";

// utils
import getWindowDimensions from "./utils/getWindowDimensions";
import { debounce } from "./utils/debounce";

// global styles
import { GlobalStyles } from "./indexStyles";

// js rendering css
import { AppContainer, AppMain } from "./AppStyles";

function App({ fetchUsersStart, usersLength }) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { width } = windowDimensions;

  // fetch initial users logic
  if (!usersLength) fetchUsersStart(width <= 425 ? 3 : 6);

  // capture screen width logic
  useEffect(() => {
    const fn = debounce(() => setWindowDimensions(getWindowDimensions()), 250);
    // const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <AppContainer>
      <GlobalStyles />
      <Header width={width} />
      <Sidenav />
      <Modal />
      <AppMain>
        <Switch>
          <Route exact path="/" render={() => <LandingPage width={width} />} />
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  usersLength: selectUsersCollectionLength,
});

export default connect(mapStateToProps, { fetchUsersStart })(App);
