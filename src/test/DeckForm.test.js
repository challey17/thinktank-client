import React from "react";
import ReactDOM from "react-dom";
import DeckForm from "../components/DeckForm/DeckForm";
import { BrowserRouter } from "react-router-dom";

import { shallow } from "enzyme";
// https://stackoverflow.com/questions/48895514/how-do-you-test-router-match-params-with-jest-and-enzyme
it("renders App component without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <DeckForm
        match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
