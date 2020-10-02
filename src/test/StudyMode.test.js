import React from "react";
import ReactDOM from "react-dom";
import StudyMode from "../components/StudyMode/StudyMode";
import { BrowserRouter } from "react-router-dom";
//import Context from "../Context"
it("renders App component without crashing", () => {
  const div = document.createElement("div");

  const decks = [
    {
      id: 0,
      deckname: "",
    },
    {
      id: 1,
      deckname: "",
    },
  ];
  ReactDOM.render(
    <BrowserRouter>
      <StudyMode decks={decks} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
