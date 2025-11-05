import "../Button/button.css";
import { styleButtonEnum } from "./enum";



const Button = ({disabled=false, title, handleFunction, idButton, typeButton = "button", variant= 'default' }) => {
   const style = styleButtonEnum[variant] || styleButtonEnum.default;

  return (
    <button
  type={typeButton}
  id={idButton}
  onClick={() => !disabled && handleFunction()} 
  className="botao"
  style={{
    "--bg": style?.backgroundColor,
    "--hover": style?.bgHover,
    "--text": style?.textColor,
    "--border": style?.borderColor,
    "--disabled": disabled ? 1 : 0, 
  }}
>
  {title}
</button>

  );
};

export default Button;
