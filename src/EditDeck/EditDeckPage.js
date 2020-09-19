import React from "react";
import Navbar from "../NavBar/NavBar";
////THIS IS THE ONLY COMPONENT THAT WILL UPDATE STATE//
//input for deckname, question/front, answer/back
// not sure if i should use textarea or input for question, answer

// if editing an existing deck, populate with existing data
export default function EditDeckPage() {
  return (
    <div className="edit-deck-page">
      <nav>
        <Navbar />
      </nav>
      <form>
        <h2>Create Deck/Edit Deck</h2>
        <label htmlFor="deck-title">Deck Title *</label>
        <input
          type="text"
          className="deck-title-input"
          name="deck-title"
          id="deck-title"
        />

        <div className="card-input-field">
          <h2>Cards</h2>

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
              delete
            </button>
          </div>
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
              delete
            </button>
          </div>
        </div>
        <button type="submit" className="save-deck-info">
          {" "}
          Save Changes
        </button>
      </form>
    </div>
  );
}
