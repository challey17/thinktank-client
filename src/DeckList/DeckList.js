import React from "react";
import Deck from "../Deck/Deck";
import Context from "../Context";

export default class DeckList extends React.Component {
  static contextType = Context;

  render() {
    return (
      <ul>
        {this.context.data.data.decks.map((deck, i) => (
          <Deck deck={deck} key={i} />
        ))}
      </ul>
    );
  }
}
