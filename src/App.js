import React, { Component } from "react";

import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import StudyMode from "./StudyMode/SudyMode";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import data from "./STORE";
import EditDeckPage from "./EditDeck/EditDeckPage";
import Context from "./Context";
class App extends Component {
  state = { data };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/home"
            render={(props) => <Homepage data={data} />}
          />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/editdeck" component={EditDeckPage} />
          {/* will render study component,path is deckId*/}
          <Route
            exact
            path="/exampledeck/:id"
            render={(props) => <StudyMode data={data} {...props} />}
          />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
