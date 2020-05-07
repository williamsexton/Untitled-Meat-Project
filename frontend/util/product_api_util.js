export const fetchProduct = (id) => $.ajax({
  method: "GET",
  url: `/api/products/${id}`,
});
export const searchProducts = (query) => $.ajax({
  method: "GET",
  url: `/api/products?query=${query}`,
});
