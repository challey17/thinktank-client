import React from "react";
import ReactDOM from "react-dom";
import DeckList from "../components/DeckList/DeckList";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <DeckList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
