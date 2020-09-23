import React from "react";
import Navbar from "../NavBar/NavBar";
import Context from "../Context";

export default class DeckForm extends React.Component {
  static contextType = Context;

  render() {
    const { id = 0 } = this.props.match.params;
    console.log(this.props.match.params.id);

    //callback for filter method
    // '===' doesn't work but getting console warning
    const filterCards = (card) => {
      return card.deckId == this.props.match.params.id;
    };
    const existingCardsInDeck = this.context.data.data.cards.filter(
      filterCards
    );
    console.log(existingCardsInDeck);

    const cardItem = existingCardsInDeck.map((card, i) => (
      <li key={i} className="card-input-field">
        <div className="card-q-a">
          <label htmlFor="card-question"> Question</label>
          <textarea
            type="text"
            className="card-question-input card-info"
            name="card-question"
            id="card-question"
            defaultValue={card.question}
          />
          <label htmlFor="card-answer"> Answer</label>
          <textarea
            type="text"
            className="card-answer-input card-info"
            name="card-answer"
            id="card-answer"
            defaultValue={card.answer}
          />
          <button type="submit" className="delete-card">
            {" "}
            remove
          </button>
        </div>
      </li>
    ));

    return (
      <div className="edit-deck-page">
        <Navbar />
        <form>
          <h2>{id ? "Edit Deck" : "Create Deck"}</h2>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            type="text"
            className="deck-title-input"
            name="deck-title"
            id="deck-title"
          />
          <h2>Cards</h2>
          <ul className="card-inputs">
            {cardItem}
            {/* ask Tj about this key */}
            <li key={cardItem[id]} className="card-input-field">
              <div className="card-q-a">
                <label htmlFor="card-question"> Question</label>
                <textarea
                  type="text"
                  className="card-question-input card-info"
                  name="card-question"
                  id="card-question"
                />
                <label htmlFor="card-answer"> Answer</label>
                <textarea
                  type="text"
                  className="card-answer-input card-info"
                  name="card-answer"
                  id="card-answer"
                />
                <button type="submit" className="delete-card">
                  {" "}
                  remove
                </button>
              </div>
            </li>
          </ul>

          <button type="submit" className="save-deck-info">
            {" "}
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
