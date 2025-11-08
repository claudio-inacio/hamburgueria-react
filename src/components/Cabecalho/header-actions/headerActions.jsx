import Button from "../../Button/button";
import InputVariant from "../../Input/inputVariant";
import "./headerActions.css";

import { useState } from "react";

const HeaderActions = ({
  inputFunction = () => {},
  buttonFunction = () => {},
}) => {
  const [produto, setProduto] = useState("");
  return (
    <div className="containerHeader">
      <InputVariant
        id="filter-product"
        inputType="text"
        placeholder="Buscar Produto"
        handleChangeFuntion={(e) => {
          setProduto(e);
  
          inputFunction(e);
        }}
        value={produto}
      />
      <Button
        handleFunction={() => buttonFunction(produto)}
        produto={produto}
        title='Novo Produto'
        idButton="new-item"
        key='button-increment-new-item'
      />
    </div>
  );
};

export default HeaderActions;
