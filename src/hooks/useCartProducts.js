import { useState } from "react";
import { createMapResultSet, update, add, remove } from "../utils/reducerUtils";
import LocalStorageUtils from "../utils/localStorageUtils";
import { actionsCartEnum } from "../utils/enum";

export const sortProductsByLike = (products) => {
  return [...products].sort((a, b) => {
    if (a.isLike === b.isLike) return 0;
    return a.isLike ? -1 : 1;
  });
};

const useCartProducts = (params = {}) => {
  const cartProductsSaveToLocalStorage = LocalStorageUtils.getItem(
    "cart-product-list",
    true
  );

  const [cartProductsResultSet, setCartProductsResultSet] = useState(
    cartProductsSaveToLocalStorage || []
  );
  const [resultSetMap, setResultSetMap] = useState();
  const [statusBuyProducts, setStatusBuyProducts] = useState(null);
  const [loadingFinishBuy, setLoadingFinishBuy] = useState(null);
  const [successtoCreate, setSuccesstoCreate] = useState(null);

  const handleGetCartProducts = async () => {
    const mapResultSet = createMapResultSet(cartProductsResultSet, "id");
    LocalStorageUtils.setItem("cart-product-list", cartProductsResultSet);
    setResultSetMap(mapResultSet || []);
    setCartProductsResultSet(cartProductsResultSet || []);
    return true;
  };

  const preapreProductToIncrementOrDecrementQuantity = (product, action) => {
    const selectedProduct = cartProductsResultSet.find(
      (prod) => prod.id === product.id
    );
    const productNewQuantity =
      action === actionsCartEnum.INCREMENT
        ? { ...selectedProduct, quantidade: selectedProduct?.quantidade + 1 }
        : { ...selectedProduct, quantidade: selectedProduct?.quantidade - 1 };
    return productNewQuantity;
  };

  const handleIncrementOrDecrementQuantity = (product, action) => {
    const productPreapred = preapreProductToIncrementOrDecrementQuantity(
      product,
      action
    );
    const { resultSet, mapResultSet, index } = update(
      cartProductsResultSet,
      resultSetMap,
      productPreapred,
      product.id
    );
    LocalStorageUtils.setItem("cart-product-list", resultSet);
    setCartProductsResultSet(resultSet);
    setResultSetMap(mapResultSet);
  };

  const handleAddProductToCart = async (product, _resultSetMap) => {
    const productExistInCart = resultSetMap[product.id] >= 0;
    if (!!productExistInCart)
      return handleIncrementOrDecrementQuantity(
        product,
        actionsCartEnum.INCREMENT
      );

    const { resultSet, mapResultSet } = add(
      cartProductsResultSet,
      resultSetMap,
      { ...product, quantidade: 1 },
      "id",
      false
    );
    setResultSetMap(mapResultSet);
    setCartProductsResultSet(resultSet);
    LocalStorageUtils.setItem("cart-product-list", resultSet);
  };

  const handleRemoveProductToCart = (product, action) => {
    const { resultSet, mapResultSet } = remove(
      cartProductsResultSet,
      resultSetMap,
      product.id
    );
    LocalStorageUtils.setItem("cart-product-list", resultSet);
    setCartProductsResultSet(resultSet);
    setResultSetMap(mapResultSet);
  };

  const handleClearAllProducts = () => {
    LocalStorageUtils.setItem("cart-product-list", []);
    setResultSetMap({});
    setCartProductsResultSet([]);
  };

const handleFinishBuySuccess = async (data) => {

  const isPix = data?.paymentType === "PIX";
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  setLoadingFinishBuy(
    isPix ? "CONFIRMANDO RECEBIMENTO..." : "ANALISANDO CREDENCIAIS DO CARTÃO"
  );
  await wait(4000);

  setLoadingFinishBuy(
    isPix ? "ANALISANDO VALORES..." : "LANÇANDO COMPRA PARA OS DADOS INFORMADOS"
  );
  await wait(5000);

  handleClearAllProducts();
  setLoadingFinishBuy(null);
  setSuccesstoCreate(true);
  await wait(3000);

  setSuccesstoCreate(null);
};



  return {
    handleIncrementOrDecrementQuantity,
    statusBuyProducts,
    setStatusBuyProducts,
    successtoCreate,
    handleClearAllProducts,
    handleGetCartProducts,
    handleFinishBuySuccess,
    handleRemoveProductToCart,
    resultSetMap,
    loadingFinishBuy,
    handleAddProductToCart,
    cartProductsResultSet,
  };
};

export default useCartProducts;
