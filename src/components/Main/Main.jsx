import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Main({ onSignIn, onSignUp, onSearch,onRegistrationComplete }) {
  return (
    <main className="main">
      <div className="main__header">
        <Header
          onSignUp={onSignUp}
          onSignIn={onSignIn}
          onRegistrationComplete={onRegistrationComplete}
        />
        {/* <Navigation /> */}
      </div>
      <div className="main__search">
        <h1 className="main__search-title">What's going on in the world?</h1>
        <p className="main__search-description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </div>
      <section className="main__results">
        <NewsCard />
      </section>
    </main>
  );
}

export default Main;
