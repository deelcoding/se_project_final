import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function Main({ onSignIn, onSignUp }) {
  return (
    <main className="main">
      <div className="main__header">
        <Header
          onSignUp={onSignUp}
          onSignIn={onSignIn}
        />
        {/* <Navigation /> */}
      </div>
      <div className="main__search">
        <h1 className="main__search_title">What's going on in the world?</h1>
        <p className="main__search_description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={(e) => e.preventDefault()} />
      </div>
      <section className="main__results">
        <NewsCard />
      </section>
    </main>
  );
}

export default Main;
