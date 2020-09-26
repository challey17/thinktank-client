import React, { Component } from "react";
import DeckList from "../DeckList/DeckList";
import Navbar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    //const data = this.props.data;
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <main className="homepage-body">
          <header>
            <p>what content here?</p>
          </header>
          <section className="deck-display-container">
            <h2>Decks (2)</h2>
            <DeckList />
            <Link to="/createdeck" className="create-new-deck">
              create new deck
            </Link>
          </section>
        </main>
      </div>
    );
  }
}
