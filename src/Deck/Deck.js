import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
export default class Deck extends React.Component {
  static contextType = Context;
  render() {
    const { deck } = this.props;
    return (
      <li>
        <Link to={`/study/${deck.id}`} className="deck-link">
          <h1> {deck.deckname} </h1>
        </Link>
        <button className="deck-button">edit</button>
        <button className="deck-button">study</button>
      </li>
    );
  }
}
