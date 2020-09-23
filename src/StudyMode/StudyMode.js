import React from "react";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Context from "../Context";

export default class StudyMode extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <Navbar />
        <ul>
          {this.context.data.data.cards
            .filter(
              (card) => card.deckId === Number(this.props.match.params.id)
            )
            .map((card, i) => (
              <Card card={card} key={i} />
            ))}
        </ul>
      </div>
    );
  }
}
