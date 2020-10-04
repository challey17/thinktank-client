import React from "react";
import Deck from "../Deck/Deck";
import Context from "../../Context";

export default class DeckList extends React.Component {
  static contextType = Context;

  render() {
    const { decks = [] } = this.context;

    const userDecks = decks.filter(
      (deck) => deck.user_id === this.context.user_id
    );
    return (
      <ul>
        {userDecks.map((deck, i) => (
          <Deck deck={deck} key={i} />
        ))}
      </ul>
    );
  }
}
