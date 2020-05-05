export const getCategoryProducts= (state, id) => {
  const category = state.entities.categories[id]
  if (category === undefined) return [];
  return category.productIds.map((id) => state.entities.products[id])
};



export const getUserBox = (state, id) => {
  const boxes = Object.values(state.entities.boxes);
  if (!boxes.length) return [];
  const box = boxes.filter((boxi)=> boxi.user_id === id);
  if (!box.length) return [];
  return box[0];
};

export const getUserBoxId = (state, id) => {
  const box = getUserBox(state,id);
  if (box instanceof Array) return undefined;
  return box.id
}

export const getBoxInclusions = (state, id) => {

  const box = getUserBox(state, id);
  if (Object.keys(box).length === 0) return [];
  return box.inclusionIds.map((incId) => state.entities.inclusions[incId]);
};

export const getBoxProducts = (state, id) => {
  const box = getUserBox(state, id);
  if (Object.keys(box).length === 0) return [];
  return box.productIds.map((productId) => state.entities.products[productId]);
};

export const boxInclude = (state, userId, productId) => {
  const inclusions = getBoxInclusions(state, userId);
  if (!(inclusions instanceof Array)) return false;
  return inclusions.some((inc) => inc.product_id === productId)
}

export const getOrderInclusions = (state, orderId) => {
  return (state.entities.orders[orderId].inclusionIds.map(
    (id) => state.entities.inclusions[id],
  )
  );
};
export const getOrderProducts = (state, orderId) => {
  if (state.entities.orders[orderId] === undefined) return [];
  const order = state.entities.orders[orderId];
  if (order.productIds === undefined) return [];
  return order.productIds.map((id) => state.entities.products[id]);
};


export const isItemInBox = (state, productId) => {
  let userBox;
  for (let key in state.entities.boxes) {
    if (state.entities.boxes[key].user_id === state.session.id) userBox = state.entities.boxes[key];
  }
  if (!userBox) return undefined;
  if (!(userBox.productIds.includes(parseInt(productId)))) return false;
  const inclusion = userBox.inclusionIds
    .map(id => state.entities.inclusions[id])
    .filter(inclusion => inclusion.product_id == productId)[0];
  return inclusion;

}