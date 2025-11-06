import "../Input/inputVariant.css";

const InputVariant = ({
  inputType = "text",
  handleChangeFuntion,
  id = "variant-input",
  placeholder = "",
  value,
  key,
}) => {
  return (
    <input
      type={inputType}
      key={key}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChangeFuntion(e.target.value)}
    />
  );
};

export default InputVariant;
