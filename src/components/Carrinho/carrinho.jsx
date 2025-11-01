import { useState } from "react";
import "./carrinho.css";

const Carrinho = ({ produto, funcao, funcaoRemove }) => {
  const [totalCarrinho, setTotalCarrinho] = useState(0);
  const valorFinal = produto.reduce(
    (acc, valorAtual) => acc + valorAtual.price,
    0
  );
  return (
    <div className="divGeral">
      <p className="carrinhop">Carrinho de compras</p>
      {produto.length > 0 ? (
        <div className="containerCarrinho">
          <ul className="ulCarrinho">
            {produto.map((prod) => {
              return (
                <li className="produtoCarrinho">
                  <img src={prod.img} alt="Foto do produto" />
                  <div className="carrinhoInformacao">
                    <h2>{prod.name}</h2>
                    <aside>{prod.category}</aside>
                  </div>
                  <button onClick={() => funcao(prod.id)}>Remover</button>
                </li>
              );
            })}
          </ul>
          <div className="Resultado">
            <div className="total">
              <h3>Total</h3>
              <span>RS{valorFinal.toFixed(2)}</span>
            </div>
            <button onClick={() => funcaoRemove(0)}>Remover todos</button>
          </div>
        </div>
      ) : (
        <h2 className="sacolaVazia">Sua sacola está vazia</h2>
      )}
    </div>
  );
};

export default Carrinho;
