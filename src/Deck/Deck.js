import React from "react";
import { Link } from "react-router-dom";

export default class Deck extends React.Component {
  render() {
    const currentUserId = 1;

    const currentUserDecks = this.props.data.decks.filter(
      (user) => user.userId === currentUserId
    );

    const decksDisplayed = currentUserDecks.map((userdeck) => (
      <div key={userdeck.id} className="userdeck-container">
        <Link to={"/exampledeck/" + userdeck.id} className="card-deck">
          <h1> {userdeck.deckname} </h1>
        </Link>
      </div>
    ));

    return <div>{decksDisplayed}</div>;
  }
}
