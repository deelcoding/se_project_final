import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { api } from "../../utils/api";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AboutAuthor from "../AboutTheAuthor/About";
import RegisterModal from "../RegisterModel/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SearchResults from "../SearchResults/SearchResults";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const location = useLocation();

  /**************************************************************************
   *                               USER STATE                               *
   **************************************************************************/

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [error, setError] = useState("");

  /**************************************************************************
   *                                 MODAL                                  *
   **************************************************************************/

  const [activeModal, setActiveModal] = useState("");

  const onSignUp = () => {
    setActiveModal("sign-up");
  };

  const onSignIn = () => {
    setActiveModal("sign-in");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignUp = () => {
    setActiveModal("sign-up");
  };

  const handleSignIn = () => {
    setActiveModal("sign-in");
  };

  /**************************************************************************
   *                               USE EFFECT                               *
   **************************************************************************/

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    const fakeUser = {
      name: "Demo User",
      email: "demo@example.com",
      _id: "123",
    };
    setCurrentUser(fakeUser);
  }, []);

  /**************************************************************************
   *                                 SEARCH                                 *
   **************************************************************************/

  const onSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setIsLoading(true);
    setError("");
    setHasSearched(true);
    setSearchQuery(searchTerm);

    api
      .fetchArticles(searchTerm, "apiKey")
      .then((data) => {
        if (data.articles.length === 0) {
          setError("Nothing Found");
          setArticles([]);
        } else {
          setArticles(data.articles);
          setVisibleCount(3);
        }
      })
      .catch(() => {
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false); // ⏱ delay hiding preloader
        }, 1000); // 1 second
      });
  };

  /**************************************************************************
   *                            SUBMIT HANDLERS                             *
   **************************************************************************/

  const [savedArticles, setSavedArticles] = useState([]);

  const handleSave = (article) => {
    const alreadySaved = savedArticles.some((a) => a.url === article.url);
    if (alreadySaved) {
      setSavedArticles((prev) => prev.filter((a) => a.url !== article.url));
    } else {
      setSavedArticles((prev) => [...prev, article]);
    }
  };

  /**************************************************************************
   *                            FULL APPLICATION                            *
   **************************************************************************/

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  onSignUp={onSignUp}
                  onSignIn={onSignIn}
                  onSearch={onSearch}
                />
              }
            />
            <Route
              path="/saved-news"
              element={<ProtectedRoute element={<SavedNews />} />}
            />
          </Routes>
          {hasSearched && (
            <SearchResults
              articles={articles}
              isLoading={isLoading}
              error={error}
              visibleCount={visibleCount}
              onShowMore={() => setVisibleCount((prev) => prev + 3)}
              savedArticles={savedArticles}
              onCardSave={handleSave}
            />
          )}
          {/* <Preloader/> */}
          {location.pathname !== "/saved-news" && <AboutAuthor />}
          <Footer />
        </div>
        {activeModal === "sign-up" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "sign-up"}
            // onSubmit={handleRegisterSubmit}
            onSignIn={handleSignIn}
            isLoading={isLoading}
          />
        )}
        {activeModal === "sign-in" && (
          <SignInModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "sign-in"}
            // onSubmit={handleLoginSubmit}
            onSignUp={handleSignUp}
            isLoading={isLoading}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
