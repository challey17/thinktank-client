import React from "react";
import Deck from "../Deck/Deck";

export default class DeckList extends React.Component {
  render() {
    //console.log(this.props.data.decks);

    return (
      <div>
        <Deck data={this.props.data} />
      </div>
    );
  }
}
