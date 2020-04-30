export const getCategoryProducts= (state, id) => {
  const category = state.entities.categories[id]
  if (category === undefined) return [];
  return category.productIds.map((id) => state.entities.products[id])
}