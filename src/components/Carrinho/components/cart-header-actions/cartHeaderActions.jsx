import Button from "../../../Button/button";
import "./cartHeaderActions.css";
const CartHeaderActions = ({ handleClearAllProducts = () => {} }) => {
  return (
    <div className="actionsHeader">
      <p className="carrinhop">🛒 Meu Carrinho</p>
      <Button
        loading={false}
        handleFunction={() => handleClearAllProducts()}
        title="Limpar Carrinho"
        typeButton="button"
        variant="alert"
        idButton={`clear-to-cart-`}
      />
    </div>
  );
};

export default CartHeaderActions;
