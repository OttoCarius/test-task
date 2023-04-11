import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./utils/GlobalStyled";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="">
      <App />
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>
);
