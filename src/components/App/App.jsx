import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="page__content">
          {/* <Main /> */}
          <Routes>
            <Route
              path="/"
              element={<Main />}
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

          <Footer />
        </div>
        {/* {activeModal === "add-garment" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "add-garment"}
            onSubmit={handleAddItemSubmit}
          />
        )}
        {activeModal === "sign-up" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "sign-up"}
            onSubmit={handleRegisterSubmit}
            onLogin={handleLogIn}
            isLoading={isLoading}
          />
        )}
        {activeModal === "log-in" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "log-in"}
            onSubmit={handleLoginSubmit}
            onSignUp={handleSignUp}
            isLoading={isLoading}
          />
        )}
        {activeModal === "edit-profile" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "edit-profile"}
            onSubmit={handleEditProfileSubmit}
          />
        )}
        {activeModal === "preview" && (
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
