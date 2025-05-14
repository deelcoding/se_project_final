import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../assets/GitHub.svg";
import facebook from "../../assets/fb.png"

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__name">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </h2>
      <section className="footer__right">
        <section className="footer__links">
          <Link
            to="/"
            className="footer__link">
            Home
          </Link>
          <Link
            to="http://tripleten.com"
            className="footer__link">
            TripleTen
          </Link>
        </section>
        <section>
          <Link
            to="https://github.com/deelcoding"
            className="footer__social">
            <img
              src={github}
              alt="GitHub logo"
              className="footer__github"
            />
          </Link>
        </section>
        <section>
          <Link
            to="https://github.com/deelcoding"
            className="footer__social">
            <img
              src={facebook}
              alt="Facebook logo"
              className="footer__facebook"
            />
          </Link>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
