import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import StudyMode from "./StudyMode/StudyMode";
import Navbar from "./NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import { users, decks, cards } from "./STORE";
import DeckForm from "./DeckForm/DeckForm";
import Context from "./Context";
import { API_ENDPOINT } from "./config";
import TokenService from "./services/token-service";
class App extends Component {
  state = {
    users,
    decks,
    cards,
    user_id: 0,
    updateCard: (id, key, value) => {
      const cards = this.state.cards.map((c) => {
        if (c.id === id) {
          c[key] = value;
        }
        return c;
      });

      this.setState({ cards });
    },
    removeCard: (id) =>
      this.setState({ cards: this.state.cards.filter((c) => c.id !== id) }),
    addCard: (newCard) =>
      this.setState({
        cards: [...this.state.cards, newCard],
      }),
    updateDeck: (id, deckname) => {
      const decks = this.state.decks.map((d) => {
        if (d.id === id) {
          d.deckname = deckname;
        }
        return d;
      });
      this.setState({ decks });
    },
    newDeck: (newDeck) =>
      this.setState({
        decks: [...this.state.decks, newDeck],
      }),
    logout: () => this.setState({ user_id: 0 }),
    login: (user_id) => this.setState({ user_id }),
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      // fetch to the /api/users w/ the token to get the user_id
      this.setState({ user_id: 1 });
    }
    fetch(`${API_ENDPOINT}/decks`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((decks) => {
        this.setState({ decks: decks });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header>
            <nav>
              <Route path="/" component={Navbar} />
            </nav>
          </header>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Homepage} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/createdeck" component={DeckForm} />
          <Route path="/editdeck/:id" component={DeckForm} />
          <Route path="/study/:id" component={StudyMode} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
