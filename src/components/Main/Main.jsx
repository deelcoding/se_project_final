import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import { useContext } from "react";

function Main({ onSignUp, onSignIn, onSearch }) {
  return (
    <main className="main">
      <section className="main__header">
        <Header
          onSignUp={onSignUp}
          onSignIn={onSignIn}
        />
      </section>
      <div className="main__search">
        <h1 className="main__search_title">What's going on in the world?</h1>
        <p className="main__search_description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
    </main>
  );
}

export default Main;
