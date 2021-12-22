import React from "react";
import ReactDOM from "react-dom";

var name = "Soumik";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My Lucky number is {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
