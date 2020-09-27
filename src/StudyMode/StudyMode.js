import React from "react";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Context from "../Context";

export default class StudyMode extends React.Component {
  static contextType = Context;

  //isShown={shownCardIndex === i}
  state = {
    shownCardIndex: 0,
  };

  // filter all cards by deckId
  filterCards = () => {
    const { cards } = this.context;
    const { id } = this.props.match.params;
    return cards.filter((card) => card.deckId == id);
  };

  // map through cards matching deckId
  renderCards = (cards) => {
    return cards.map((card, i) => (
      <Card card={card} key={i} isShown={this.state.shownCardIndex === i} />
    ));
  };

  render() {
    const { cards } = this.context;
    //if cards have length, filter cards, else set to empty array
    const filteredCards = cards.length > 0 ? this.filterCards() : [];
    return (
      <div>
        <Navbar />
        {filteredCards.length > 0 ? (
          <ul>{this.renderCards(filteredCards)}</ul>
        ) : (
          <p>No cards in deck</p>
        )}
      </div>
    );
  }
}
