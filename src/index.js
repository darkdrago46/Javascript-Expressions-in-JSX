import React from "react";
import ReactDOM from "react-dom";

var fname = "Soumik";
var lname = "Rakshit";

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>My Lucky number is {3 + 4}</p>
    <p>My roll no is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
