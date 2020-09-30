import React from "react";
import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Context from "../../Context";
import { API_ENDPOINT } from "../../config";
import TokenService from "../../services/token-service";

export default class StudyMode extends React.Component {
  static contextType = Context;

  state = {
    shownCardIndex: 0,
  };

  componentDidMount() {
    fetch(`${API_ENDPOINT}/cards/${Number(this.props.match.params.id)}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((cards) => {
        this.context.setCards(cards);
      });
  }

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
    const { cards = [] } = this.context;
    return (
      <div>
        <Navbar />
        {cards.length > 0 ? (
          <>
            <h2>
              Card {this.state.shownCardIndex + 1} of {cards.length}
            </h2>
            <ul>{this.renderCards(cards)}</ul>
          </>
        ) : (
          <p>No cards in deck - or Loading....</p>
        )}
      </div>
    );
  }
}
