import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="hcolor" contentEditable="true">
      HEllo
    </h1>
    <ul>
      <li>item1</li>
      <li>item2</li>
    </ul>
  </div>,
  document.getElementById("root")
);
