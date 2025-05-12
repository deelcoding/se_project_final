import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logout from "../../assets/logout-main.png";

function Header({ onSignUp }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header_theme_dark" : ""}`}>
      <div className="header__name">
        <Link
          to="/"
          className="header__link">
          NewsExplorer
        </Link>
      </div>
      <div className="header__right">
        <div className="header__nav">
          <Link
            to="/"
            className="header__home-button">
            <span className="header__button-text">Home</span>
          </Link>

          {currentUser ? (
            <>
              <Link
                to="/saved-news"
                className="header__saved-button">
                <span className="header__button-text">Saved Articles</span>
              </Link>
              <Link
                to="/saved-news"
                className="header__link">
                <div className="header__profile">
                  <p className="header__username">{currentUser.name}</p>
                  <img
                    src={logout}
                    alt="Logout"
                    className="header__logout"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={onSignUp}
                type="button"
                className="header__signin-button">
                <span className="header__signin-text">Sign in</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
