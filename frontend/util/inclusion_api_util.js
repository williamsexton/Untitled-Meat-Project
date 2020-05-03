export const updateInclusion = (inclusion) => $.ajax({
  method: 'PATCH',
  url: `/api/inclusions/${inclusion.id}`,
  data: { inclusion },
});

export const createInclusion = (inclusion) => $.ajax({
  method: 'POST',
  url: '/api/inclusions',
  data: { inclusion },
});

export const deleteInclusion = (id) => $.ajax({
  method: 'DELETE',
  url: `/api/inclusions/${id}`,
});
