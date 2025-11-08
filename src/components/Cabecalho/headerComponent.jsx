
import "./headerComponent.css";
import HeaderActions from "./header-actions/headerActions";
import HeaderTitle from "./header-tittle/headerTitle";


const HeaderComponent = ({ handleFilterProducts, handleIncrementNewItem }) => {
  return (
    <header className="header">
      <HeaderTitle />
      <HeaderActions 
      inputFunction={handleFilterProducts}
      buttonFunction={handleIncrementNewItem}
      />
    </header>
  );
};

export default HeaderComponent;
