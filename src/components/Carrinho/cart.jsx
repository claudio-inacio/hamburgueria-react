import "./cart.css";
import CartHeaderActions from "./components/cart-header-actions/cartHeaderActions";
import CartList from "./components/cart-list/cartList";

const Cart = ({
  listProducts = [],
  handleClearAllProducts,
  handleIncrementOrDecrementQuantity = () => {},
  handleRemoveProductToCart = () => {},
  handleFinishBuySuccess,
}) => {

  const handleGetTotalValue = () => {
    if(!listProducts || listProducts.length === 0) return 0
    const resultTotal = listProducts.reduce(
      (acc, item) => acc + item.price * item.quantidade,
      0
    );
    return resultTotal
  }

  return (
    <div className="divGeral">
      <CartHeaderActions handleClearAllProducts={handleClearAllProducts} /> 
      {listProducts.length > 0 ? (
        <CartList
        listProducts={listProducts} 
        handleIncrementOrDecrementQuantity={handleIncrementOrDecrementQuantity}
        handleRemoveProductToCart={handleRemoveProductToCart}
        handleGetTotalValue={handleGetTotalValue}
        handleFinishBuySuccess={handleFinishBuySuccess}
        />
      ) : (
        <h2 className="sacolaVazia">Sua sacola está vazia 🛍</h2>
      )}
    </div>
  );
};

export default Cart;
