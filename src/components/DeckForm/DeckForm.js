import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
//import { v4 as uuidv4 } from "uuid";

import config from "../../config";
import TokenService from "../../services/token-service";

export default class DeckForm extends React.Component {
  static contextType = Context;

  state = {
    deckname: "",
    id: 0,
    userId: null,
    cards: [],
    editedCards: [],
    newCardQuestion: "",
    newCardAnswer: "",
  };

  getCards(deck) {
    console.log("getting cards for deck...");
    fetch(
      `${config.API_ENDPOINT}/cards/${Number(this.props.match.params.id)}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      }
    )
      .then((res) => res.json())
      .then((cards) => {
        this.context.setCards(cards);
        this.setState({
          ...deck,
          cards,
        });
      });
  }

  updateCard = (id, key, value) => {
    const cards = this.state.cards.map((c) => {
      if (c.id === id) {
        c[key] = value;
      }
      return c;
    });

    const { editedCards } = this.state;
    if (!editedCards.includes(id)) {
      editedCards.push(id);
    }

    this.setState({ cards, editedCards });
  };

  saveCard = (id) => {
    const card = this.state.cards.find((c) => c.id === id);

    if (card) {
      const id = card.id;
      const updatedCard = {
        question: card.question,
        answer: card.answer,
      };
      // fetch put with that card PUT
      fetch(`${config.API_ENDPOINT}/cards/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(updatedCard),
      });
      //do i need .then?
      this.setState({
        editedCards: this.state.editedCards.filter((cid) => cid !== id),
      });
    }
  };

  removeCard = (id) => {
    console.log(id);

    fetch(`${config.API_ENDPOINT}/cards/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    this.setState({ cards: this.state.cards.filter((c) => c.id !== id) });
  };

  addCard = () => {
    const newCard = {
      answer: this.state.newCardAnswer,
      deck_id: this.state.id,
      question: this.state.newCardQuestion,
    };
    // fetch post to /api/cards to create the card, so you have the id
    fetch(`${config.API_ENDPOINT}/cards`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newCard),
    })
      // then run setState to add it in
      .then((res) => res.json())
      .then((card) => {
        this.setState({
          cards: [...this.state.cards, card],
          newCardAnswer: "",
          newCardQuestion: "",
        });
      });
  };

  deleteDeck = () => {
    fetch(
      `${config.API_ENDPOINT}/decks/${Number(this.props.match.params.id)}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      }
    )
      .then(() => {
        this.context.deleteDeck(this.state.id);
      })
      .then(() => {
        this.props.history.push("/home");
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      fetch(`${config.API_ENDPOINT}/decks/${this.state.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({ deckname: this.state.deckname }),
      }).then(() => {
        this.context.updateDeck(this.state.id, this.state.deckname);
      });
    } else {
      fetch(`${config.API_ENDPOINT}/decks`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({ deckname: this.state.deckname }),
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
    const { id = 0 } = this.props.match.params;
    if (this.state.id !== Number(id)) {
      const deck = id
        ? this.context.decks.find((d) => d.id === Number(id))
        : null;
      if (deck && !this.state.cards.length) {
        this.getCards(deck);
      }
    }
    const cardItems = this.state.cards.length
      ? this.state.cards.map((card, i) => (
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
              {this.state.editedCards.includes(card.id) && (
                <button
                  className="save-changes-card"
                  onClick={(e) => this.saveCard(card.id)}
                >
                  {" "}
                  save changes
                </button>
              )}
              <button
                className="delete-card"
                onClick={(e) => this.removeCard(card.id)}
              >
                {" "}
                remove
              </button>
            </div>
          </li>
        ))
      : "";

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
          <button className="delete-deck" onClick={(e) => this.deleteDeck()}>
            {" "}
            delete deck
          </button>
        </form>
      </div>
    );
  }
}
