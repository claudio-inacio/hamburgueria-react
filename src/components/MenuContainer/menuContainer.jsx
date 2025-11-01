import Produto from "../Produtos/produto";
import "./menuContainer.css";

const MenuContainer = ({ prodt, onClick }) => {
  return (
    <div className="cardapio">
      {prodt.map((p) => {
        return <Produto funcao={onClick} prod={p} />;
      })}
    </div>
  );
};

export default MenuContainer;
