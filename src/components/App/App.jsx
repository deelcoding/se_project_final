import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AboutAuthor from "../AboutTheAuthor/About";
// import Header from "../Header/Header";
import RegisterModal from "../RegisterModel/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";

function App() {
  const [count, setCount] = useState(0);

  /**************************************************************************
   *                               USER STATE                               *
   **************************************************************************/

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  onSignUp={onSignUp}
                  onSignIn={onSignIn}
                />
              }
            />
            {/* <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onAddGarment={onAddGarment}
                      onEditProfile={onEditProfile}
                      onCardLike={handleCardLike}
                      setIsLoggedIn={setIsLoggedIn}
                      handleLogout={handleLogout}
                    />
                  }
                />
              }
            /> */}
          </Routes>
          <AboutAuthor />

          <Footer />
        </div>
        {/* {activeModal === "add-garment" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "add-garment"}
            onSubmit={handleAddItemSubmit}
          />
        )} */}
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
        {/* {activeModal === "edit-profile" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "edit-profile"}
            onSubmit={handleEditProfileSubmit}
          />
        )} */}
        {/* {activeModal === "preview" && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={handleCloseModal}
            isOpen={activeModal === "preview"}
            handleDeleteItem={handleDeleteItem}
          />
        )} */}
      </div>
    </>
  );
}

export default App;
