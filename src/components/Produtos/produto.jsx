import { formatCurrency, isValidURL } from "../../utils";
import Button from "../Button/button";
import Tolltip from "../Tolltip/tollpit";
import LikeButton from "./components/like-button/likeButton";
import "./produto.css";
import imageDontProduct from "./img/no-image.png";
import ProductInfoActionsComponent from "./components/product-info-actions/productInfoActionsComponent";

const Produto = ({
  clearProductsFiltered = () => {},
  prod = {},
  loading = false,
  handleAddtoFavorite = () => {},
  handleAddProductToCart = () => {},
  resultSetMap = {},
}) => {
  return (
    <div className="card-produto">
      <figure className="produto-foto">
        <img
          src={
            prod?.img && isValidURL(prod?.img) ? prod?.img : imageDontProduct
          }
          alt={prod?.name || "Imagem do produto"}
          loading="lazy"
        />
      </figure>

      <ProductInfoActionsComponent
        prod={prod}
        handleAddtoFavorite={handleAddtoFavorite}
      />
      <div className="container-actions">
        <Button
          loading={loading}
          handleFunction={() => {
            handleAddProductToCart(prod, resultSetMap);
            clearProductsFiltered();
          }}
          title="Adicionar ao carrinho"
          typeButton="button"
          variant="primary"
          idButton={`add-to-cart-${prod?.id || "default"}`}
        />
      </div>
    </div>
  );
};

export default Produto;
