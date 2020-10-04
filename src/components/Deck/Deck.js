import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
export default class Deck extends React.Component {
  static contextType = Context;
  render() {
    const { deck } = this.props;
    return (
      <li className="deck-list-view">
        <Link to={`/study/${deck.id}`} className="deck-link deck-title">
          <h1> {deck.deckname} </h1>
        </Link>
        <Link to={`/study/${deck.id}`} className="study-btn">
          study
        </Link>

        <Link to={`/editdeck/${deck.id}`} className="edit-btn">
          edit
        </Link>
      </li>
    );
  }
}
