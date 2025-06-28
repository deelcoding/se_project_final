import "./RegistrationComplete.css";

function RegistrationComplete({ isOpen, onClose, onSignIn }) {
  return (
    <div className={`registration ${isOpen ? "registration_opened" : ""}`}>
      <div className="registration__content">
        <h1 className="registration__title">Registration successfully completed!</h1>
        <button
          onClick={onClose}
          type="button"
          className="registration__close"
        />
        <button
          className="registration__to-login"
          type="button"
          onClick={onSignIn}>
          <span className="modal__register-button-text">Sign In</span>
        </button>
      </div>
    </div>
  );
}

export default RegistrationComplete;
