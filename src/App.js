import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("ul", {}, props.name),
    React.createElement(
      "li",
      {},
      React.createElement(
        "ul",
        {},
        React.createElement("li", {}, props.description),
      ),
    ),
  ]);
};

const App = () => {
  debugger;
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Classic Pizza with pep",
    }),
    React.createElement(Pizza, {
      name: "Margaritta Pizza",
      description: "Margariiiiiiiiiiiiiiiiiiita",
    }),
    React.createElement(Pizza, {
      name: "Persian Pizza",
      description: "Pizza that modified for persian taste",
    }),
    React.createElement(Pizza, {
      name: "Pizza Shab",
      description: "A specific thick pizza.",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
