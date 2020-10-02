import React from "react";
import ReactDOM from "react-dom";
import HomePage from "../components/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
