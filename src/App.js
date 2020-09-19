import React, { Component } from "react";

import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import Cards from "./Cards/Cards";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import data from "./STORE";
import EditDeckPage from "./EditDeck/EditDeckPage";
// should state live in app component or homepage?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  render() {
    //console.log(data.cards[2].question);
    return (
      <main className="App">
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/home"
          render={(props) => <Homepage data={data} />}
        />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/editdeck" component={EditDeckPage} />
        <Route
          exact
          path="/exampledeck/:id"
          render={(props) => <Cards data={data} {...props} />}
        />
      </main>
    );
  }
}

export default App;
