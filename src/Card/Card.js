import React, { Component } from "react";
import Context from "../Context";

export default class Card extends Component {
  static contextType = Context;

  state = {
    // 3 states
    // notShown, showQuestionMode, showAnswerMode
    //render jsx for each state
    //notshown: this.props.card,
  };

  showCardAnswer = (card) => {
    this.setState({ answer_showing: true });
  };

  render() {
    //all cards with matching deckId from StudyMode
    const { card } = this.props;

    console.log(this.props);
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
            <div className="rating-container">
              <p className="rating-hint">How well do you know this?</p>
              <div className="rating-button-container">
                <button className="difficulty-rating" onClick={ratingOnClick}>
                  1 <p>not at all</p>
                </button>
                <button className="difficulty-rating" onClick={ratingOnClick}>
                  2 <p>almost</p>
                </button>
                <button className="difficulty-rating" onClick={ratingOnClick}>
                  3 <p>perfectly</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </li>
    );
  }
}
