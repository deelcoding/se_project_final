import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__name">
        <Link
          to="/"
          className="header__link">
          NewsExplorer
        </Link>
      </div>
      <div className="header__right">
        <div className="header__nav">
          <>
            <button
              // onClick={onSignUp}
              type="button"
              className="header__home-button">
              <span className="header__button-text">Home</span>
            </button>
            <button
              // onClick={onLogIn}
              type="button"
              className="header__signin-button">
              <span className="header__button-text">Sign in</span>
            </button>
          </>
        </div>
      </div>
    </header>
  );
}

export default Header;
