import { Children } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <button
        onClick={onClose}
        type="button"
        className="modal__close"
      />
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <form
          action=""
          className="modal__form"
          onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
