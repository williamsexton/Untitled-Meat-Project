export const fetchProduct = (id) => $.ajax({
  method: "GET",
  url: `/api/products/${id}`,
})