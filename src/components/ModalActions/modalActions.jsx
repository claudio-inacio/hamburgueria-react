import Button from "../Button/button";
import "./modalActions.css";

const ModalActions = ({
  isOpen,
  title,
  status, // 'success' | 'error' | undefined
  children,
  onClose,
  onConfirm = null,
  onCancel = null,
  actions = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
      >
        <div
          className={`modal-header ${status ? status : ""}`}
        >
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {actions && (
          <div className="modal-actions">
            {onCancel && (
              <Button disabled handleFunction={onCancel} title='CANCELAR' typeButton="button" variant="error" idButton='button-action-modal-cancel' key='button-cancel'/>               
            )}
            {onConfirm && (
               <Button handleFunction={onConfirm} title='REGISTRAR' typeButton="button" variant="success" idButton='button-action-modal-confirm' key='button-confirm-action'/>               
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalActions;
