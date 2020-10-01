import React from "react";
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
    //i'm trying to get the deckname to display on the page (line 54)
    // deck is an array with everydeck filtered out except the deck i want
    const deck = this.context.decks.filter((deck) => {
      return deck.id === Number(this.props.match.params.id);
    });
    console.log(deck);
    const deckname = this.context.decks[0].deckname;
    //console.log("deckname", deckname);
    this.setState({ deckname: deckname });
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
    //figure out how to get deck.deckname for <h2>
    //console.log(this.context.decks);
    const { cards = [] } = this.context;
    return (
      <div>
        {cards.length > 0 ? (
          <>
            <h2>{this.state.deckname}</h2>
            <h4>
              Card {this.state.shownCardIndex + 1} of {cards.length}
            </h4>
            <ul>{this.renderCards(cards)}</ul>
          </>
        ) : (
          <p>No cards in deck - or Loading....</p>
        )}
      </div>
    );
  }
}
