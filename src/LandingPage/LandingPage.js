import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h2>ThinkTank</h2>
      <p>
        Make what you learn really stick. Create and study flaschcards to retain
        what you know or solidify new concepts .
      </p>
      <Link to="/login" className="landing-button">
        {" "}
        login
      </Link>
      <Link to="/signup" className="landing-button">
        {" "}
        sign-up
      </Link>
      <p>
        <Link to="/home">Browse Decks without Logging In</Link>
      </p>
    </div>
  );
}
