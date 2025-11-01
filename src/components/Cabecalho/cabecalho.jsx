import { useEffect, useState } from "react";
import "./cabecalho.css";
import Button from "../Button/button";

const Cabecalho = ({ funcao }) => {
  const [produto, setProduto] = useState("");

  //useEffect(() => {
  //funcao(produto);
  //}, [produto]);

  return (
    <header className="header">
      <div className="logo">
        <h2 className="titulo">Burguer</h2>
        <p>kenzie</p>
      </div>
      <div className="containerHeader">
        <input
          type={"text"}
          placeholder={"Digitar Pesquisas"}
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <Button
          onClick={funcao}
          produto={produto}
          titulo={"Pesquisar"}
          className={"botaoPesquisa"}
        />
      </div>
    </header>
  );
};

export default Cabecalho;
