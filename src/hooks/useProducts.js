import { useState } from "react";
import { createMapResultSet, update, add } from "../utils/reducerUtils";
import LocalStorageUtils from "../utils/localStorageUtils";

export const products = [
  {
    id: 1,
    name: "Hamburguer",
    category: "Sanduiches",
    price: 14.11,
    img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    isLike: false,
  },
  {
    id: 2,
    name: "X-Burguer",
    category: "Sanduiches",
    price: 16.33,
    img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    isLike: false,
  },
  {
    id: 3,
    name: "Big Kenzie",
    category: "Sanduiches",
    price: 18.88,
    img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    isLike: false,
  },
  {
    id: 4,
    name: "Fanta Guaraná",
    category: "Bebidas",
    price: 5.55,
    img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    isLike: true,
  },
  {
    id: 5,
    name: "Coca-Cola",
    category: "Bebidas",
    price: 4.99,
    img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    isLike: false,
  },
  {
    id: 6,
    name: "Milkshake Ovomaltine",
    category: "Bebidas",
    price: 4.99,
    img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    isLike: false,
  },
];

export const sortProductsByLike = (products) => {
  return [...products].sort((a, b) => {
    if (a.isLike === b.isLike) return 0;
    return a.isLike ? -1 : 1;
  });
};

const useProducts = (params = {}) => {
  const productsSaveToLocalStorage = LocalStorageUtils.getItem(
    "product-list",
    true
  );

  const [productsResultSet, setProductsResultSet] = useState(
    productsSaveToLocalStorage || []
  );
  const [resultSetMap, setResultSetMap] = useState();
  const [statusCreate, setStatusCreate] = useState(null);

  const handleGetInitialProducts = async () => {
    const resultSetSortProducts = sortProductsByLike(
      productsSaveToLocalStorage || products
    );
    const mapResultSet = createMapResultSet(resultSetSortProducts, "id");
    LocalStorageUtils.setItem("product-list", resultSetSortProducts);
    setResultSetMap(mapResultSet || []);
    setProductsResultSet(resultSetSortProducts || []);
    return true;
  };

  const handleAddtoFavorite = (product) => {

    const { resultSet, mapResultSet, index } = update(
      productsResultSet,
      resultSetMap,
      { ...product, isLike: !product.isLike },
      product.id
    );
    LocalStorageUtils.setItem("product-list", resultSet);
    setProductsResultSet(resultSet);
    setResultSetMap(mapResultSet);
  };

  const handleSaveProduct = async (formData) => {
    const randomId = Math.floor(Math.random() * 10000);
    const { resultSet, mapResultSet } = add(
      productsResultSet,
      resultSetMap,
      {
        ...formData,
        id: randomId,
        isLike: false,
      },
      'id',
      false
    );
    setResultSetMap(mapResultSet);
    setStatusCreate('success')
    setProductsResultSet(resultSet);
    LocalStorageUtils.setItem("product-list", resultSet);
  };

  return {
    handleSaveProduct,
    statusCreate,
    setStatusCreate,
    handleGetInitialProducts,
    handleAddtoFavorite,
    productsResultSet,
  };
};

export default useProducts;
