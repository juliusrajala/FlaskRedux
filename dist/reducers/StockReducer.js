import ActionTypes from '../actions/ActionTypes';

const product = ( state, action ) => {
  switch(action){
    case ActionTypes.Stock.STOCK_ADD:
      return {
        id: action.id,
        product: product
      }
    default:
      return state
  }
};

const stock = ( state = [], action ) => {
  switch(action.type){
    case ActionTypes.Stock.STOCK_ADD:
      return [
        ...state,
        product(undefined, action)
      ]
  }
};

export default stock;