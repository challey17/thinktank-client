import React from "react";
import Navbar from "../NavBar/NavBar";
import Context from "../Context";
//THIS COMPONENT IS FOR BOTH /createdeck and /editdeck/:id ROUTES, that is why using match.params
// if editing an existing deck, populate with existing data
export default class DeckForm extends React.Component {
  static contextType = Context;
  //if this.props.match.params === this.context.data.deck.id
  render() {
    const { id = 0 } = this.props.match.params;
    console.log(this.props.match.params);
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

          <div className="card-input-field">
            <h2>Cards</h2>
            {/* a div for existing cards? after saving a new card from form, becomes 
            card front and back with edit button */}
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
              <button type="submit" className="save-card">
                {" "}
                save
              </button>
            </div>
          </div>
          <button type="submit" className="add-new-card">
            {" "}
            New Card
          </button>
          <button type="submit" className="save-deck-info">
            {" "}
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
