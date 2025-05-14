import { useNavigate } from "react-router-dom";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useFormAndValidation from "../../utils/useFormAndValidation";

const RegisterModal = ({
  handleCloseModal,
  onSubmit,
  isOpen,
  onSignIn,
  isLoading,
}) => {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();
  const navigate = useNavigate(); // Call useNavigate for redirecting

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values) // Submit the values to the parent (e.g., API)
      .then(() => {
        handleCloseModal(); // Close the modal after successful registration and login
        resetForm(); // Reset form state after submission
        // navigate("/profile"); // Redirect to profile page
      })
      .catch((error) => {
        console.error("Registration error:", error);
        // Optionally, handle error here (e.g., show a message)
      });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={isLoading ? "Registering..." : "Next"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      formValid={isValid}
      onSubmit={handleSubmit}>
      <label
        htmlFor="email"
        className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="password"
        className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Enter password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label
        htmlFor="name"
        className="modal__label">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Enter your username"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
      </label>
      <div className="modal__button-container">
        <button
          type="submit"
          className="modal__submit">
          Sign Up
        </button>
        <button
          className="modal__to-login"
          type="button"
          onClick={onSignIn}
        >
          or <span className="modal__login-button-text">Sign In</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
