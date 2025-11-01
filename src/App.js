import Cabecalho from "./components/Cabecalho/cabecalho";
import Carrinho from "./components/Carrinho/carrinho";
import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer/menuContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduiches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduiches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduiches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [vendaAtual, setVendaAtual] = useState([]);
  const [totalCarrinho, setTotalCarrinho] = useState(0);

  const mostrarProdutos = (valor) => {
    const filtro = products.filter((prod) =>
      prod.name.toLowerCase().includes(valor.toLowerCase())
    );
    setProdutosFiltrados(filtro);
  };
  const addCarrinho = (addId) => {
    const selecionado = products.find((prod) => prod.id === addId);
    const removidos = vendaAtual.filter((prod) => prod.id === selecionado.id);
    removidos.length <= 0 ? setVendaAtual([...vendaAtual, selecionado]) : <></>;
    //vendaAtual.find(selecionado) === true
    //? setVendaAtual([...vendaAtual, selecionado])
    //: setVendaAtual([...vendaAtual]);
  };

  const removeCarrinho = (removeId) => {
    console.log(removeId);
    const removidos = vendaAtual.filter((prod) => prod.id !== removeId);
    setVendaAtual(removidos);
  };

  const removerTudo = (number) => {
    console.log(number);
    const removerTodos = vendaAtual.filter((prod) => prod.id === number);
    setVendaAtual(removerTodos);
  };

  return (
    <div className="App">
      <header className="cabecalho">
        <Cabecalho funcao={mostrarProdutos} />
      </header>

      <body className="corpo">
        <MenuContainer
          prodt={produtosFiltrados.length > 0 ? produtosFiltrados : products}
          onClick={addCarrinho}
        />
        <Carrinho
          funcao={removeCarrinho}
          funcaoRemove={removerTudo}
          produto={vendaAtual}
          total
        />
      </body>
    </div>
  );
}

export default App;
