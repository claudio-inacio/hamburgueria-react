import "./button.css";

const Button = ({ titulo, onClick, produto }) => {
  return (
    <div>
      <button onClick={() => onClick(produto)} className={"botao"}>
        {titulo}
      </button>
    </div>
  );
};

export default Button;
