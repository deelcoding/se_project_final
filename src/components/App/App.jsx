import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AboutAuthor from "../AboutTheAuthor/About";
import RegisterModal from "../RegisterModel/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import SearchResults from "../SearchResults/SearchResults";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  /**************************************************************************
   *                               USER STATE                               *
   **************************************************************************/

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

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

  /**************************************************************************
   *                                 SEARCH                                 *
   **************************************************************************/

  const onSearch = () => {
    setHasSearched(true);
  };

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
            {/* <Route
              path="/saved-news"
              element={<ProtectedRoute element={<SavedNews />} />}
            /> */}
            {hasSearched && <SearchResults />}
          </Routes>
          <AboutAuthor />
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
