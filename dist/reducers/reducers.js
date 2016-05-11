import ActionTypes from '../actions/ActionTypes';

const stockReducer = (state = {}, action) => {
  console.log('stockReducer called with state', state, 'and action', action);

  switch(action.type){
    case ActionTypes.Stock.STOCK_ADD:
      return {
        ...state,
        message: action.value
      }
    default:
      return state;
  }
}

export default stockReducer;