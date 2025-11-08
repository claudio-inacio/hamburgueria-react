import { formatCurrency } from "../../../../utils";
import Tolltip from "../../../Tolltip/tollpit";
import LikeButton from "../like-button/likeButton";
import "./productInfoActionsComponent.css";

const ProductInfoActionsComponent = ({
  prod = {},
  handleAddtoFavorite = () => {},
}) => {
  return (
    <div className="produto-info-actions">
      <div className="produto-info">
        <h2 className="produto-nome">{prod?.name || "Produto sem nome"}</h2>
        <p className="produto-categoria">{prod?.category || "Sem categoria"}</p>
        <p className="produto-preco">
          {prod?.price
            ? `R$ ${formatCurrency(prod.price)}`
            : "Preço indisponível"}
        </p>
      </div>
      <div className="produto-actions">
        <Tolltip message="Ao favoritar o produto, ele sempre sera listado entre os primeiros.">
          <LikeButton
            handleFunction={handleAddtoFavorite}
            prod={prod}
            like={prod.isLike}
          />
        </Tolltip>
      </div>
    </div>
  );
};

export default ProductInfoActionsComponent;
