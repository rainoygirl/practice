import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test from "./App.test";
import reportWebVitals from "./reportWebVitals";
import Holy_Grail from "./0325/Holy Grail";
import Css_Grid from "./0325/CSS Grid";
import Full_screen from "./0325/full screen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Holy_Grail /> */}
    {/* <Css_Grid /> */}
    {/* <Full_screen /> */}
    <Test />
  </React.StrictMode>
);

reportWebVitals();
