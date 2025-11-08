import "./itemHeader.css";
const ItemHeader = ({ product }) => {
  return (
    <>
      <img src={product.img} alt="N/C" />
      <div className="carrinhoInformacao">
        <h2>{product.name}</h2>
        <aside>{product.category}</aside>
        <p>R$ {product.price.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ItemHeader;
