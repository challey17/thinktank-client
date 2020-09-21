import React from "react";
import Deck from "../Deck/Deck";

export default class DeckList extends React.Component {
  render() {
    return (
      <div>
        <Deck />
        <Deck />
      </div>
    );
  }
}
