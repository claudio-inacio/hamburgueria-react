import { useState } from "react";

import "./formCreateProduct.css";
import InputVariant from "../../Input/inputVariant";
import { formatCurrency } from "../../../utils";

const FormCreateProduct = ({ handleSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("Sanduiches");
  const [errors, setErrors] = useState({});

  const handlePriceChange = (val) => {
    const _errors = { ...errors };
    _errors.productPrice = null;
    setErrors(_errors);

    const formatted = formatCurrency(val);
    setProductPrice(formatted);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!productName.trim())
      newErrors.productName = "Informe o nome do produto.";
    if (!productPrice.trim()) newErrors.productPrice = "Informe o preço.";
    // if (!productImage.trim()) newErrors.productImage = "Selecione uma imagem.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {    
    e.preventDefault();

    if (!validateForm()) return;

    const cleanPrice = Number(productPrice.replace(/\D/g, "")) / 100;

    const newProduct = {
      product_name: productName.trim(),
      product_price: cleanPrice,
      product_image: productImage,
      product_category: productCategory,
    };

    handleSubmit(newProduct);
    setProductName("");
    setProductPrice("");
    setProductImage("");
    setProductCategory("Sanduiches");
    setErrors({});
  };

  return (
    <form id="create-product" className="form-create-product" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="product_name">Nome do Produto</label>
        <InputVariant
          id="product_name"
          placeholder="Ex: X-Burger"
          value={productName}
          handleChangeFuntion={(e) => {
            console.log(e)
            const _errors = { ...errors };
            _errors.productName = null;
            setErrors(_errors);
            setProductName(e);
          }}
        />
        {errors.productName && <p className="error">{errors.productName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="product_price">Preço</label>
        <InputVariant
          id="product_price"
          placeholder="Ex: R$ 25,90"
          value={productPrice}
          handleChangeFuntion={handlePriceChange}
        />
        {errors.productPrice && <p className="error">{errors.productPrice}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="url_image">Url da Imagem</label>
        <InputVariant
          id="url_image"
          placeholder=""
          value={productImage}
          handleChangeFuntion={setProductImage}
        />
      </div>

      <div className="form-group">
        <label htmlFor="product_category">Categoria</label>
        <select
          id="product_category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="Sanduiches">Sanduíches</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Outros">Outros</option>
        </select>
      </div>

      {/* <button type="submit" className="botao">
        Criar Produto
      </button> */}
    </form>
  );
};

export default FormCreateProduct;
