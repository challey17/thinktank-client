import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import { v4 as uuidv4 } from "uuid";

import config from "../../config";
import TokenService from "../../services/token-service";

export default class DeckForm extends React.Component {
  static contextType = Context;

  state = {
    deckname: "",
    id: null,
    userId: null,
    cards: [],
    newCardQuestion: "",
    newCardAnswer: "",
  };

  componentDidMount() {
    const { id = 0 } = this.props.match.params;
    const deck = id ? this.context.decks.find((d) => d.id === Number(id)) : {};

    this.setState({
      ...deck,
      cards: this.context.cards.filter(this.filterCards),
    });
  }

  filterCards = (card) => {
    return card.deckId === parseInt(this.props.match.params.id);
  };

  updateCard = (id, key, value) => {
    const cards = this.state.cards.map((c) => {
      if (c.id === id) {
        c[key] = value;
      }
      return c;
    });
    // fetch put to /api/cards/id send in the body {key:value}
    this.setState({ cards }, () => {
      this.context.updateCard(id, key, value);
    });
  };

  removeCard = (id) => {
    // fetch delete to /api/cards/id
    // then

    this.setState({ cards: this.state.cards.filter((c) => c.id !== id) }, () =>
      this.context.removeCard(id)
    );
  };

  addCard = () => {
    const newCard = {
      answer: this.state.newCardAnswer,
      deckId: this.state.id,
      question: this.state.newCardQuestion,
      // in the future, remove the id
      id: uuidv4(),
    };
    // fetch post to /api/cards to create the card, so you have the id
    // then run setState to add it in
    // then run this.context.addCard with the res
    this.setState(
      {
        cards: [...this.state.cards, newCard],
        newCardAnswer: "",
        newCardQuestion: "",
      },
      () => this.context.addCard(newCard)
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      // fetch put to /api/decks/id to save the title change
      this.context.updateDeck(this.state.id, this.state.deckname);
    } else {
      // fetch post to /api/decks
      const newDeck = {
        deckname: this.state.deckname,
      };
      fetch(`${config.API_ENDPOINT}/decks`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(newDeck),
      })
        .then((res) => res.json())
        .then((deck) => {
          this.setState({ id: deck.id }, () => {
            this.context.newDeck(deck);
          });
        });
    }
  };

  render() {
    const cardItems = this.state.cards.map((card, i) => (
      <li key={i} className="card-input-field">
        <div className="card-q-a">
          <p>
            <label htmlFor={`card-question-${i}`}> Question</label>
            <textarea
              type="text"
              className="card-question-input card-info"
              name={`card-question-${i}`}
              id={`card-question-${i}`}
              defaultValue={card.question}
              onChange={(e) =>
                this.updateCard(card.id, "question", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor={`card-answer-${i}`}> Answer</label>
            <textarea
              type="text"
              className="card-answer-input card-info"
              name={`card-answer-${i}`}
              id={`card-answer-${i}`}
              defaultValue={card.answer}
              onChange={(e) =>
                this.updateCard(card.id, "answer", e.target.value)
              }
            />
          </p>
          <button
            className="delete-card"
            onClick={(e) => this.removeCard(card.id)}
          >
            {" "}
            remove
          </button>
        </div>
      </li>
    ));

    const { id } = this.state;

    return (
      <div className="edit-deck-page">
        <form onSubmit={this.handleSubmit}>
          <h2>{id ? "Edit Deck" : "Create Deck"}</h2>
          <label htmlFor="deckname">Deck Title</label>
          <input
            type="text"
            className="deckname-input"
            name="deckname"
            id="deckname"
            value={this.state.deckname}
            onChange={(e) => this.setState({ deckname: e.target.value })}
          />
          <button type="submit" className="save-deck-info">
            {" "}
            Save
          </button>
          <h2>Cards</h2>
          <ul className="card-inputs">
            {cardItems}

            {this.state.id && (
              <li key="new-key" className="card-input-field">
                <div className="card-q-a">
                  <p>
                    <label htmlFor="card-question"> Question</label>
                    <textarea
                      type="text"
                      className="card-question-input card-info"
                      name="card-question"
                      id="card-question"
                      value={this.state.newCardQuestion}
                      onChange={(e) =>
                        this.setState({ newCardQuestion: e.target.value })
                      }
                    />
                  </p>
                  <p>
                    <label htmlFor="card-answer"> Answer</label>
                    <textarea
                      type="text"
                      className="card-answer-input card-info"
                      name="card-answer"
                      id="card-answer"
                      value={this.state.newCardAnswer}
                      onChange={(e) =>
                        this.setState({ newCardAnswer: e.target.value })
                      }
                    />
                  </p>
                  <button onClick={() => this.addCard()} className="add-card">
                    {" "}
                    Add
                  </button>
                </div>
              </li>
            )}
          </ul>

          <button type="submit" className="save-deck-info">
            {" "}
            Save Changes
          </button>
          <Link to={`/study/${this.state.id}`}>Start Studying</Link>
        </form>
      </div>
    );
  }
}
