import Produto from "../Produtos/produto";
import "./productsContainer.css";

const ProductsContainer = ({clearProductsFiltered = () => {},handleAddtoFavorite =() => {}, prodt, handleAddProductToCart = () => {}, resultSetMap = {}  }) => {
  return (
    <div className="cardapio">
      {prodt.map((p, index) => (
        <Produto handleAddtoFavorite={handleAddtoFavorite} clearProductsFiltered={clearProductsFiltered} resultSetMap={resultSetMap} key={index} handleAddProductToCart={handleAddProductToCart} prod={p} />
      ))}
    </div>
  );
};

export default ProductsContainer;
