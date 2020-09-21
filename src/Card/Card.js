import React, { Component } from "react";

// CARD FLIP? create a front/question div and a back/answer div
//show/ hide on click?
// or a CSS transition
export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>question</h2>
        <h2>answer</h2>
        <button className="reveal-answer">Reveal Answer</button>
        <p>How well do you know this?</p>
        <div className="rating-container">
          <button className="difficulty-rating">
            1 <p>not at all</p>
          </button>
          <button className="difficulty-rating">2</button>
          <button className="difficulty-rating">
            3 <p>perfectly</p>
          </button>
        </div>
      </div>
    );
  }
}
