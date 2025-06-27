import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logout from "../../assets/logout-profile.svg"; // make sure this is the correct import

function Header({ onSignIn, activeModal }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`header ${isSavedNewsPage ? "header_theme_dark" : ""} 
        ${isMobileMenuOpen ? "header__menu-open" : ""}`}>
        <div className="header__name">
          <Link
            to="/"
            className="header__link"
            onClick={() => setMobileMenuOpen(false)}>
            NewsExplorer
          </Link>
        </div>

        {!activeModal && (
          <button
            className="header__menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <span className="header__close-icon"></span>
            ) : (
              <span className="header__hamburger-icon"></span>
            )}
          </button>
        )}

        <div className="header__right">
          <nav
            className={`header__nav ${
              isMobileMenuOpen ? "header__nav--open" : ""
            }`}>
            <Link
              to="/"
              className="header__home-button"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="header__button-text">Home</span>
            </Link>

            {currentUser ? (
              <>
                <Link
                  to="/saved-news"
                  className={`header__saved-button ${
                    location.pathname === "/saved-news" ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="header__button-text">Saved Articles</span>
                </Link>
                <Link
                  to="/saved-news"
                  className="header__link"
                  onClick={() => setMobileMenuOpen(false)}>
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
              <button
                onClick={() => {
                  onSignIn();
                  setMobileMenuOpen(false);
                }}
                className="header__signin-button">
                <span className="header__signin-text">Sign in</span>
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="header__overlay"
          onClick={toggleMobileMenu}></div>
      )}
    </>
  );
}

export default Header;
