import React from "react";
import ReactDOM from "react-dom";
import Deck from "../components/Deck/Deck";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  const deck = {
    id: 0,
    deckname: "",
  };
  ReactDOM.render(
    <BrowserRouter>
      <Deck deck={deck} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
