export const fetchBox = (id) => $.ajax({
  method: 'GET',
  url: `/api/boxes/${id}`,
});
