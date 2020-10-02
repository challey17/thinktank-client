import React from "react";
import ReactDOM from "react-dom";
import SignupForm from "../components/SignupForm/SignupForm";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
