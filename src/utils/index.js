export const formatCurrency = (value) => {
  if (!value || typeof value !== "string") return value;

  let numericValue = value.replace(/\D/g, "");

  numericValue = (parseInt(numericValue, 10) / 100).toFixed(2);

  if (isNaN(numericValue)) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue);
};

export const isValidURL = (url) => {
  try {
    const parsed = new URL(url);
    return /^https?:$/.test(parsed.protocol);
  } catch {
    return false;
  }
};
