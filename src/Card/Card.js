import React, { Component } from "react";
import Context from "../Context";

export default class Card extends Component {
  static contextType = Context;

  state = {};
  // 3 states
  // notshown, questionshowmode, answershownmode
  //render jsx for each state
  showCardAnswer = (card) => {
    this.setState(
      { answer_showing: true }
      // {question_showing:false}
    );
  };

  //mapCards

  render() {
    //all cards with matching deckId from StudyMode
    const { card, isShown } = this.props;

    console.log(card);
    card.answer_showing = false;
    card.question_showing = true;
    if (!isShown) {
      return null;
    }
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
                <button className="difficulty-rating">
                  1 <p>not at all</p>
                </button>
                <button className="difficulty-rating">
                  2 <p>almost</p>
                </button>
                <button className="difficulty-rating">
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
