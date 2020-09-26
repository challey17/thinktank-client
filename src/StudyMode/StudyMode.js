import React from "react";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Context from "../Context";

export default class StudyMode extends React.Component {
  static contextType = Context;

  render() {
    const emptyDeckMessage = <p>no cards in deck</p>;
    console.log(this.context.cards.length);
    return (
      <div>
        <Navbar />
        <ul>
          {emptyDeckMessage}
          {this.context.cards
            .filter(
              // can also card.deckId.toString() === this.props.match.params.id
              (card) => card.deckId == this.props.match.params.id
            )

            .map((card, i) => (
              <Card card={card} key={i} />
            ))}
        </ul>
      </div>
    );
  }
}
