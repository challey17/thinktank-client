import React from "react";
import { Link } from "react-router-dom";

export default class Deck extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/exampledeck/2"} className="card-deck">
          <h1> deck </h1>
        </Link>
      </div>
    );
  }
}
