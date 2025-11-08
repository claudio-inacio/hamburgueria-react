import "../Button/button.css";
import { styleButtonEnum } from "./enum";

const Button = ({
  disabled = false,
  loading = false,
  confirmButtonFormReference = '',
  title,
  handleFunction,
  idButton,
  typeButton = "button",
  variant = "default",
}) => {
  const style = styleButtonEnum[variant] || styleButtonEnum.default;
  const isDisabled = disabled || loading;

  return (
    <button
      type={typeButton}
      id={idButton}
      form={confirmButtonFormReference}
      onClick={() => !isDisabled && typeButton === 'button' && handleFunction()}
      className={`botao ${loading ? "loading" : ""}`}
      style={{
        "--bg": style?.backgroundColor,
        "--hover": style?.bgHover,
        "--text": style?.textColor,
        "--border": style?.borderColor,
        "--disabled": isDisabled ? 1 : 0,
      }}
      disabled={isDisabled}
    >
      {loading ? <span class="loader">teste</span> : title}
    </button>
  );
};

export default Button;
