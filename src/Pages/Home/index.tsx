import { Link } from "react-router-dom";
import "./index.css";
import React from "react";
import { Strings } from "Resource/Strings";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1>{Strings.welcomeToThePokémonApp}</h1>
      <p>{Strings.startYourPokémonJourneyHere}</p>
      <Link to="/pokemon/list">
        <button>{Strings.click}</button>
      </Link>
    </div>
  );
};

export default Welcome;
