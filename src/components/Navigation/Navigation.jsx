import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/saved-news">Saved News</Link>
    </nav>
  );
}

export default Navigation;
