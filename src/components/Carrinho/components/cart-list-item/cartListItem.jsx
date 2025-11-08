import DeletButton from "../delet-button/deletButton";
import "./cartListItem.css";
import ItemHeader from "./item-header/itemHeader";
import QuantityControls from "./quantity-controls/quantityControls";


const CartListItem = ({ product = {}, 
  handleIncrementOrDecrementQuantity = () => {} ,
  handleRemoveProductToCart = () => {} 
}) => {
  return (
    <li className="produtoCarrinho" key={product.id}>
      <div className="produtoInfoContainer">
        <ItemHeader product={product} />

       <QuantityControls product={product} handleIncrementOrDecrementQuantity={handleIncrementOrDecrementQuantity} />
      </div>

      <div className="total-item">
        <strong>R$ {(product.price * product.quantidade).toFixed(2)}</strong>
        <DeletButton
          id={`btn-remove-item-${product.id}`}
          handleFunction={handleRemoveProductToCart}
          product={product}
        />
      </div>
    </li>
  );
};

export default CartListItem;
