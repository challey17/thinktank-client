import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { BrowserRouter } from "react-router-dom";

it("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
