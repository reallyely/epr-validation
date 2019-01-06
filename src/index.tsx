import * as React from "react";
import { render } from "react-dom";
import SectionI from "./section-1";

import "bulma/css/bulma.css";

function App() {
  return (
    <div className="container">
      <h1>EPR Form Validation</h1>
      <SectionI />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
