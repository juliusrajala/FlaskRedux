import { Map } from 'immutable';
import ActionTypes from './ActionTypes';

let productId = 0;

export const AddToStock = ({ product }) => {
  return {
    type: ActionTypes.Stock.STOCK_ADD,
    id: productId++,
    product
  }
}