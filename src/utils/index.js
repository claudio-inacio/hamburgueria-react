export const formatCurrency = (value) => {
  let numericValue = value.replace(/\D/g, "");

  numericValue = (parseInt(numericValue, 10) / 100).toFixed(2);

  if (isNaN(numericValue)) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue);
};
