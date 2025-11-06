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
  loading = false,
  cancelButtonLabel = "CANCELAR",
  confirmButtonLabel = "REGISTRAR",
  confirmButtonFormReference = "",
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-header ${status ? status : ""}`}>
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">{children}</div>

        {actions && (
          <div className="modal-actions">
            {onCancel && (
              <Button
                disabled={loading}
                handleFunction={onCancel}
                title={cancelButtonLabel}
                typeButton="button"
                variant="error"
                idButton="button-action-modal-cancel"
                key="button-cancel"
              />
            )}
            {onConfirm && (
              <Button
                confirmButtonFormReference={confirmButtonFormReference}
                loading={loading}
                handleFunction={onConfirm}
                title={confirmButtonLabel}
                typeButton="submit"
                variant="success"
                idButton="button-action-modal-confirm"
                key="button-confirm-action"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalActions;
