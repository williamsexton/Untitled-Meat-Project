export const getCategoryProducts= (state, id) => {
  const category = state.entities.categories[id]
  if (category === undefined) return [];
  return category.productIds.map((id) => state.entities.products[id])
};



export const getUserBox = (state, id) => {
  const boxes = Object.values(state.entities.boxes);
  if (!boxes.length) return [];
  const box = boxes.filter((boxi)=> boxi.user_id === id)
  if (!box.length) return [];
  return box[0];
};

export const getUserBoxId = (state, id) => {
  const box = getUserBox(state,id);
  if (box instanceof Array) return undefined;
  return box.id
}

export const getBoxInclusions = (state, id) => {

  const box = getUserBox(state, id)
  if (Object.keys(box).length === 0) return {};
  return box.inclusionIds.map((incId) => state.entities.inclusions[incId]);
};

export const getBoxProducts = (state, id) => {
  const inclusions = getBoxInclusions(state, id);
  if (Object.keys(inclusions).length === 0) return [];
  return inclusions.map((inclusion) => state.entities.products[inclusion.product_id]);
};

export const boxInclude = (state, userId, productId) => {
  const inclusions = getBoxInclusions(state, userId);
  if (!(inclusions instanceof Array)) return false;
  return inclusions.some((inc) => inc.product_id === productId)
}
