import { useState, useEffect } from "react";
import "./formPaymentType.css";
import PaymentLoading from "../payment-loading/paymentLoading";

const FormPayment = ({ handleSubmit }) => {
  const [paymentType, setPaymentType] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [loadingPix, setLoadingPix] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (paymentType === "PIX") {
      setShowQRCode(false);
      setLoadingPix(true);
      const timer = setTimeout(() => {
        setLoadingPix(false);
        setShowQRCode(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [paymentType]);

  const handleCardNumberChange = (e) => {
    
    const value = e.target.value.replace(/\D/g, "");
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const handleCardExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2, 4);
    setCardExpiry(value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!paymentType) {
      newErrors.paymentType = "Selecione uma forma de pagamento.";
    } else if (paymentType === "CARTAO") {
      if (!cardType) newErrors.cardType = "Selecione o tipo de cartão.";
      if (!cardNumber || cardNumber.replace(/\D/g, "").length < 16)
        newErrors.cardNumber = "Número do cartão inválido.";
      if (!cardExpiry || cardExpiry.length < 5)
        newErrors.cardExpiry = "Informe a validade (MM/AA).";
      if (!cardCVV || cardCVV.length < 3)
        newErrors.cardCVV = "Informe o código de segurança (CVV).";
      if (!cardName.trim()) newErrors.cardName = "Informe o nome no cartão.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      paymentType,
      cardType,
      cardNumber,
      cardName,
      cardExpiry,
      cardCVV,
    };

    handleSubmit(data);
  };

  return (
    <form id="form-payment" className="form-payment" onSubmit={onSubmit}>
      <h3 className="form-title">Forma de Pagamento</h3>

      <div className="form-group">
        <label htmlFor="paymentType">Como deseja pagar?</label>
        <select
          id="paymentType"
          value={paymentType}
          onChange={(e) => {
            setPaymentType(e.target.value);
            setErrors({});
          }}
        >
          <option value="">Selecione</option>
          <option value="PIX">PIX</option>
          <option value="CARTAO">Cartão</option>
        </select>
        {errors.paymentType && <p className="error">{errors.paymentType}</p>}
      </div>

      {paymentType === "PIX" && (
        <div className="pix-container">
          {loadingPix && <PaymentLoading message="GERANDO QRCODE..." />}
          {showQRCode && (
            <div className="qrcode-container">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Pagamento%20PIX"
                alt="QRCode PIX"
              />
              <p>Escaneie para pagar (QRCODE FICTÍCIO)</p>              
            </div>
          )}
        </div>
      )}

      {paymentType === "CARTAO" && (
        <>
          <div className="form-group">
            <label htmlFor="cardType">Tipo de Cartão</label>
            <select
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="CREDITO">Crédito</option>
              <option value="DEBITO">Débito</option>
            </select>
            {errors.cardType && <p className="error">{errors.cardType}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>

          <div className="form-inline">
            <div className="form-group half">
              <label htmlFor="cardExpiry">Validade</label>
              <input
                id="cardExpiry"
                type="text"
                placeholder="MM/AA"
                value={cardExpiry}
                onChange={handleCardExpiryChange}
                maxLength={5}
              />
              {errors.cardExpiry && <p className="error">{errors.cardExpiry}</p>}
            </div>

            <div className="form-group half">
              <label htmlFor="cardCVV">CVV</label>
              <input
                id="cardCVV"
                type="text"
                placeholder="123"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, ""))}
                maxLength={4}
              />
              {errors.cardCVV && <p className="error">{errors.cardCVV}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Nome no Cartão</label>
            <input
              id="cardName"
              type="text"
              placeholder="Ex: JOÃO DA SILVA"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
            />
            {errors.cardName && <p className="error">{errors.cardName}</p>}
          </div>
        </>
      )}
    </form>
  );
};

export default FormPayment;
