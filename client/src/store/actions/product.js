import { GET_PRODUCTS } from './action.types';

export const getProducts = () => dispatch => {
  return fetch('/api/products')
    .then(res => res.json())
    .then(products => dispatch({type: GET_PRODUCTS, payload: products}))
}