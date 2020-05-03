import * as API from '../util/box_api_util';

export const RECEIVE_BOX = 'RECEIVE_BOX';

export const receiveBox = ({ boxes, products, inclusions }) => {
  if (boxes === undefined) boxes = {};
  if (products === undefined) products = {};
  if (inclusions === undefined) inclusions = {};

  return{
  type: RECEIVE_BOX,
  boxes,
  products,
  inclusions,
}};



export const fetchBox = (id) => (dispatch) => (
  API.fetchBox(id).then(({ boxes, products, inclusions }) => dispatch(receiveBox({ boxes, products, inclusions })))
);

export const createBox = (box) => (dispatch) => (
  API.createBox(box).then(({ boxes, products, inclusions }) => dispatch(receiveBox({ boxes, products, inclusions })))
);
