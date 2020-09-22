import React, { Component } from "react";

// CARD FLIP? create a front/question div and a back/answer div
//show/ hide on click?
// or a CSS transition
export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card container-front">
          <p> What is the capital of France?</p>
          <button className="reveal-answer">Reveal Answer</button>
        </div>
        <div className="card container-back">
          <p>Paris</p>

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
      </div>
    );
  }
}
