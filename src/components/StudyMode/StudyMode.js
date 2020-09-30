import React from "react";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Context from "../../Context";

export default class StudyMode extends React.Component {
  static contextType = Context;

  state = {
    shownCardIndex: 0,
  };

  // filter all cards by deckId
  filterCards = () => {
    const { cards } = this.context;
    const { id } = this.props.match.params;
    return cards.filter((card) => card.deckId === Number(id));
  };

  // map through cards matching deckId
  renderCards = (cards) => {
    const goToNextCard = (i) => {
      const onLastCard = i === cards.length - 1;
      //if on last card, index = 0 , else index + 1
      this.setState({ shownCardIndex: onLastCard ? 0 : i + 1 });
    };
    return cards.map((card, i) => {
      if (this.state.shownCardIndex !== i) return null;
      return <Card card={card} key={i} goToNextCard={() => goToNextCard(i)} />;
    });
  };

  render() {
    const { cards } = this.context;
    //if cards have length, filter cards, else set to empty array
    const filteredCards = cards.length > 0 ? this.filterCards() : [];
    return (
      <div>
        <Navbar />
        {filteredCards.length > 0 ? (
          <>
            <h2>
              Card {this.state.shownCardIndex + 1} of {filteredCards.length}
            </h2>
            <ul>{this.renderCards(filteredCards)}</ul>
          </>
        ) : (
          <p>No cards in deck</p>
        )}
      </div>
    );
  }
}
