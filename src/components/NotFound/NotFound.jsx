// src/components/NotFound/NotFound.jsx
import React from "react";
import "./NotFound.css";
import sadIcon from "../../assets/notfound.png";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__section">
        <img
          src={sadIcon}
          alt="Not found"
          className="not-found__icon"
        />
        <h3 className="not-found__title">Nothing found</h3>
        <p className="not-found__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
