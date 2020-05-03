import * as API from '../util/inclusion_api_util';

export const RECEIVE_INCLUSION = 'RECEIVE_INCLUSION';
export const REMOVE_INCLUSION = 'REMOVE_INCLUSION';




export const receiveInclusion = ({ boxes, orders, inclusions }) => {
  if (boxes === undefined) boxes = {};
  if (orders === undefined) orders = {};
  if (inclusions === undefined) inclusions = {};
  return {
    type: RECEIVE_INCLUSION,
    orders,
    boxes,
    inclusions,
  };
};
export const removeInclusion = ({ boxes, inclusions, orders }) => {
  if (boxes === undefined) boxes = {};
  if (orders === undefined) orders = {};
  if (inclusions === undefined) inclusions = {};
  return {
    type: REMOVE_INCLUSION,
    orders,
    boxes,
    inclusions,
  };
};

export const updateInclusion = (inclusion) => (dispatch) => (
  API.updateInclusion(inclusion)
    .then((res) => dispatch(receiveInclusion(res)))
);

export const createInclusion = (inclusion) => (dispatch) => (
  API.createInclusion(inclusion)
    .then((res) => dispatch(receiveInclusion(res)))
);
export const deleteInclusion = (id) => (dispatch) => (
  API.deleteInclusion(id)
    .then((res) => dispatch(removeInclusion(res)))
);
