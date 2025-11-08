import { actionsCartEnum } from "../../../../../utils/enum";
import "./quantityControls.css";

const QuantityControls = ({
  handleIncrementOrDecrementQuantity = () => {},
  product = {},
}) => {
  return (
    <div className="quantidade-controls">
      {product.quantidade > 1 && (
        <button
          className="btn-qtd"
          disabled={product.quantidade <= 1}
          onClick={() =>
            handleIncrementOrDecrementQuantity(product, actionsCartEnum.DECREMENT)
          }
        >
          −
        </button>
      )}
      <span className="qtd">{product.quantidade}</span>
      <button
        className="btn-qtd"
        onClick={() =>
          handleIncrementOrDecrementQuantity(product, actionsCartEnum.INCREMENT)
        }
      >
        +
      </button>
    </div>
  );
};

export default QuantityControls;
