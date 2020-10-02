import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card/Card";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  const card = {
    question: "",
    answer: "",
    id: 0,
  };
  ReactDOM.render(
    <BrowserRouter>
      <Card card={card} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
