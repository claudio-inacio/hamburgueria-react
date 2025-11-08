import "./App.css";
import { useEffect, useState } from "react";
import ProductsContainer from "./components/MenuContainer/productsContainer";
import ModalActions from "./components/ModalActions/modalActions";
import FormCreateProduct from "./components/Produtos/form-create/formCreateProduct";
import useProducts from "./hooks/useProducts";
import useCartProducts from "./hooks/useCartProducts";
import FullScreenLoader from "./components/ModalLoader/FullScreenLoader";
import SuccessTolltip from "./components/success-tolltip/successTolltip";
import FormPayment from "./components/payment/payment-type/formPaymentType";
import Cart from "./components/Carrinho/cart";
import HeaderComponent from "./components/Cabecalho/headerComponent";

function App() {
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [openModalPayment, setOpenModalPayment] = useState(false);

  const {
    productsResultSet,
    statusCreate,
    setStatusCreate,
    handleGetInitialProducts,
    handleAddtoFavorite,
    handleSaveProduct,
  } = useProducts();
  const {
    cartProductsResultSet,
    resultSetMap,
    handleRemoveProductToCart,
    handleClearAllProducts,
    handleIncrementOrDecrementQuantity,
    handleAddProductToCart,
    handleGetCartProducts,
    loadingFinishBuy,
    successtoCreate,
    handleFinishBuySuccess,
  } = useCartProducts();

  const filterProducts = (valor) => {
    const filtro = productsResultSet.filter((prod) =>
      prod.name.toLowerCase().includes(valor.toLowerCase())
    );
    setProdutosFiltrados(filtro);
  };
  function clearProductsFiltered() {
    setProdutosFiltrados([]);
  }

  async function preapareToFinish(data) {
    setOpenModalPayment(null);
    await handleFinishBuySuccess(data);
  }

  async function initialData() {
    await handleGetInitialProducts();
    await handleGetCartProducts();
  }
  useEffect(() => {
    initialData();
  }, []);

  return (
    <div className="App">
      <SuccessTolltip
        isVisible={successtoCreate}
        message="Compra Realizada com Sucesso!"
      />

      <HeaderComponent
        handleIncrementNewItem={() => setIsOpen(true)}
        handleFilterProducts={filterProducts}
      />

      <body className="corpo">
        <ProductsContainer
          prodt={
            produtosFiltrados.length > 0 ? produtosFiltrados : productsResultSet
          }
          resultSetMap={resultSetMap}
          handleAddProductToCart={handleAddProductToCart}
          handleAddtoFavorite={handleAddtoFavorite}
          clearProductsFiltered={clearProductsFiltered}
        />
        <Cart
          handleRemoveProductToCart={handleRemoveProductToCart}
          handleIncrementOrDecrementQuantity={
            handleIncrementOrDecrementQuantity
          }
          handleClearAllProducts={handleClearAllProducts}
          listProducts={cartProductsResultSet}
          handleFinishBuySuccess={() => setOpenModalPayment(true)}
          total
        />
        <ModalActions
          isOpen={isOpen}
          title="Novo Produto"
          status={statusCreate}
          confirmButtonFormReference="create-product"
          onClose={() => {
            setIsOpen(false);
            setStatusCreate(null);
          }}
          onConfirm
        >
          <FormCreateProduct handleSubmit={handleSaveProduct} />
        </ModalActions>
        <ModalActions
          isOpen={openModalPayment}
          title="Confirmar Pagamento"
          confirmButtonLabel="Confirmar Pagamento"
          status={statusCreate}
          confirmButtonFormReference="form-payment"
          onClose={() => {
            setOpenModalPayment(false);
            setStatusCreate(null);
          }}
          onConfirm
        >
          <FormPayment handleSubmit={(data) => preapareToFinish(data)} />
        </ModalActions>
        <FullScreenLoader
          isLoading={!!loadingFinishBuy}
          message={loadingFinishBuy}
        />
      </body>
    </div>
  );
}

export default App;
