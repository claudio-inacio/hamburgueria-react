import CartListItem from "../cart-list-item/cartListItem";
import TotalActionFinish from "../total-action-finish/totalActionFinish";
import "./cartList.css";
const CartList = ({
  listProducts = [],
  handleIncrementOrDecrementQuantity = () => {},
  handleRemoveProductToCart = () => {},
  handleFinishBuySuccess = () => {},
  handleGetTotalValue = () => {},
}) => {
  return (
    <div className="containerCarrinho">
      <ul className="ulCarrinho">
        {listProducts.map((prod) => (
          <CartListItem
            product={prod}
            handleIncrementOrDecrementQuantity={
              handleIncrementOrDecrementQuantity
            }
            handleRemoveProductToCart={handleRemoveProductToCart}
          />
        ))}
      </ul>

      <TotalActionFinish
        handleFinishBuySuccess={handleFinishBuySuccess}
        handleGetTotalValue={handleGetTotalValue}
      />
    </div>
  );
};

export default CartList;
