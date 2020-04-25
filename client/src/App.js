// import "./App.scss";
// import React from "react";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages
import LandingPage from "./pages/LandingPage/LandingPage";

// utils
import getWindowDimensions from "./utils/getWindowDimensions";

// global styles
import {} from "./indexStyles";

// js rendering css
import { AppContainer, AppMain } from "./AppStyles";

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { width } = windowDimensions;
  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContainer>
      <Header width={width} />
      {/* sidenav */}
      {/* modal */}
      <AppMain>
        <Switch>
          <Route exact path="/" render={() => <LandingPage width={width} />} />
        </Switch>
      </AppMain>
      <Footer />
    </AppContainer>
  );
}

export default App;
