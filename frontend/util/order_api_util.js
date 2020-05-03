export const fetchOrders = (userId) => $.ajax({
  method: 'GET',
  url: '/api/orders',
  data: { id: userId }
});

export const fetchOrder = (id) => $.ajax({
  method: 'GET',
  url: `/api/orders/${id}`,
});

export const createOrder = (order) => $.ajax({
  method: 'POST',
  url: '/api/orders',
  data: { order },
});
