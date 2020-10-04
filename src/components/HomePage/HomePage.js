import React, { Component } from "react";
import DeckList from "../DeckList/DeckList";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <main className="homepage-body">
          <header></header>
          <h2>Decks </h2>
          <section className="deck-display-container">
            <DeckList />
            <Link to="/createdeck" className="create-new-deck">
              create new flashcards
            </Link>
          </section>
        </main>
      </div>
    );
  }
}
