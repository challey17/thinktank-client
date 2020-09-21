import React from "react";
import { Link } from "react-router-dom";

export default class Deck extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/exampledeck/2"} className="deck-link">
          <h1> deck </h1>
          <button className="deck-button">edit</button>
          <button className="deck-button">study</button>
        </Link>
      </div>
    );
  }
}
