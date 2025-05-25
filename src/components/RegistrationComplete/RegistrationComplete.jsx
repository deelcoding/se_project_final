import "./RegistrationComplete.css";

function RegistrationComplete({onSignIn}) {
  return (
    <div className="modal__button-container">
      <button
        type="submit"
        className="modal__submit">
        Sign in
      </button>
      <button
        className="modal__to-login"
        type="button"
        onClick={onSignIn}>
        or <span className="modal__register-button-text">Sign In</span>
      </button>
    </div>
  );
}
