import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../assets/GitHub.svg";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__top">
          <div className="footer__links">
            <Link
              to="/"
              className="footer__link">
              Home
            </Link>
            <Link
              to="https://tripleten.com"
              target="_blank"
              className="footer__link">
              TripleTen
            </Link>
          </div>
          <div className="footer__socials">
            <Link
              to="https://github.com/deelcoding"
              target="_blank"
              className="footer__social">
              <img
                src={github}
                alt="GitHub"
                className="footer__icon"
              />
            </Link>
            <Link
              to="https://facebook.com"
              target="_blank"
              className="footer__social">
              <div
                className="footer__facebook"
                role="img"
                aria-label="Facebook"
              />
            </Link>
          </div>
        </li>
        <li className="footer__copyright">
          &copy; {new Date().getFullYear()} Supersite, Powered by News API
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
