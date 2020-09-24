import React, { Component } from "react";

import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import StudyMode from "./StudyMode/StudyMode";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import data from "./STORE";
import DeckForm from "./DeckForm/DeckForm";
import Context from "./Context";
class App extends Component {
  //all methods live in state, called in other components
  //add card, edit card, delete card
  //add edit delete deck
  //reveal answer, rate(move to next card onClick)
  // addCard: (card) => {
  // this.setState({ cards: [...this.state.data.cards, card]})
  //}
  state = {
    data: { data },
    loggedIn: false,
    //updateRating:
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Homepage} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/createdeck" component={DeckForm} />
          <Route path="/editdeck/:id" component={DeckForm} />
          <Route path="/study/:id" component={StudyMode} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
