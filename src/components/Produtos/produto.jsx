import "./produto.css";
// import Button from "../Button/button";
const Produto = ({ prod, funcao }) => {
  return (
    <div className="cardProduto">
      <figure className="foto">
        <img src={prod.img} alt="Foto do Produto" />
      </figure>
      <div className="informacoes">
        <h2>{prod.name}</h2>
        <p>{prod.category}</p>
        <p className="price">R$ {prod.price} </p>
        {/* <Button onClick={funcao} produto={prod.id} titulo={"Adicionar"} /> */}
      </div>
    </div>
  );
};

export default Produto;
