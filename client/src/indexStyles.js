import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    // TYPOGRAPHY
    --font-title: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue";
    --font-text: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue";
    --font-h1-desc-fs: 5rem;
    --font-h1-desc-lh: 54px;
    --font-h1-tab-fs: 4rem;
    --font-h1-tab-lh: 44px;
    --font-h1-mob-fs: 3rem;
    --font-h1-mob-lh: 34px;
    --font-h2-uni-fs: 2.4rem;
    --font-h2-uni-lh: 29px;
    --font-p-uni-fs: 1.6rem;
    --font-p-uni-lh: 24px;
  
    // COLOR PALETTE
    // --cl-primary: #ef5b4c;
    --cl-primary: #de2b1a;
    --cl-secondary: #007bff;
    --cl-font: #393939;
    --cl-white: #ffffff;
    --cl-bg: #f9f9f3;
  
    --cl-shadow: rgba(0, 0, 0, 0.336);
  
    --cl-scroll-bg: #fff;
    --cl-scroll-shadow: rgba(0, 0, 0, 0.486);
  
    // MODAL
    --cl-modal-bg: rgba(0, 0, 0, 0.541);
    --cl-modal-line: #d8d8d8;
  
    // SIDENAV
    --cl-sidenav-bg: rgba(0, 0, 0, 0.541);
    --cl-sidenav-line: #d8d8d8;
    --cl-sidenav-linkhover: #1b4a8a;
  
    // BTN
    --cl-btn-hover: #c71400;
    --cl-btn-disabled: #d7d7d7;
    --cl-btn-text: #a6a5a5;
  
    // FORM
    // form input
    --cl-form-err: #fd0505;
    --cl-form-focus: #d8d8d8;
    --cl-form-outline: #83bfff;
    --cl-form-shadow: #83bfff;
    --cl-form-outline-err: #e96363;
    --cl-form-outline-err-shadow: #e96363;
    // radio input
    --cl-radio-checked-bg: #007bff;
    --cl-radio-unchecked-bg: #d8d8d8;
    // file input
    --cl-file-button: #ebebeb;
    --cl-file-button-hv: #d8d8d8;
  }
  
  // Z INDEXES:
  // MODAL 100
  // SIDENAV 50
  
  // UNIVERSAL
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  // BASE
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  
    @media only screen and (max-width: 48em) {
      font-size: 56.25%;
    }
  
    @media only screen and (max-width: 26.563em) {
      font-size: 50%;
    }
  }
  
  body {
    font-family: var(--font-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--cl-font);
    scroll-behavior: smooth;
  
    // scroll setup
    &::-webkit-scrollbar {
      width: 0.8rem;
      background-color: var(--cl-scroll-bg);
    }
    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        to bottom,
        var(--cl-primary),
        var(--cl-secondary)
      );
      border-radius: 5rem;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
      box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  // SELECTION
  ::selection {
    // background-color: var(--cl-primary);
    background-color: var(--cl-primary);
    color: var(--cl-white);
  }
  
  #sidenav {
    position: relative;
  }
  
  #modal {
    position: relative;
  }
`;
