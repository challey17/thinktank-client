import React, { Component } from "react";
import Context from "../../Context";

// weighted random for card rating
//https://stackoverflow.com/questions/30203362/how-to-generate-a-random-weighted-distribution-of-elements

export default class Card extends Component {
  static contextType = Context;

  state = {};

  showCardAnswer = (card) => {
    this.setState({ answer_showing: true });
  };

  render() {
    //all cards with matching deckId from StudyMode
    const { card } = this.props;

    //console.log(this.props);
    card.answer_showing = false;

    const ratingOnClick = (e) => {
      this.props.goToNextCard();
    };

    return (
      <li key={card.id} className="card-container">
        <div className="card container-front">
          <p> {card.question}</p>
          <button
            className="reveal-answer"
            onClick={() => this.showCardAnswer()}
          >
            Reveal Answer
          </button>
        </div>
        {this.state.answer_showing && (
          <div className="card container-back">
            <p>{card.answer}</p>

            <button className="difficulty-rating" onClick={ratingOnClick}>
              Next Card
            </button>
          </div>
        )}
      </li>
    );
  }
}
