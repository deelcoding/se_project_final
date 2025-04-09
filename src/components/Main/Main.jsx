import Header from "../Header/Header";
import "./Main.css";
import { useContext } from "react";

function Main() {
  return (
    <main className="main">
      <section className="main__header">
        <Header />
      </section>
      <div className="main__search">
        <h1 className="main__search_title">What's going on in the world?</h1>
        <p className="main__search_description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="main__search-bar">
          <input
            type="text"
            placeholder="Enter topic"
          />
          <button>Search</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
