import React from "react";
import Deck from "../Deck/Deck";
import Context from "../../Context";

export default class DeckList extends React.Component {
  static contextType = Context;

  render() {
    console.log(this.context);

    const { decks = [] } = this.context;
    return (
      <ul>
        {decks.map((deck, i) => (
          <Deck deck={deck} key={i} />
        ))}
      </ul>
    );
  }
}
