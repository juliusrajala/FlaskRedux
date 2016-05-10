const ActionTypes = {
  Purchases: {
    PURCHASES_LOADING: 'ActionTypes.Purchases.PURCHASES_LOADING',
    PURCHASES_LOADING_SUCCESS: 'ActionTypes.Purchases.PURCHASES_LOADING_SUCCESS',
    PURCHASES_LOADING_ERROR: 'ActionTypes.Purchases.PURCHASES_LOADING_ERROR'
  },
  Wall: {
    WALL_LOADING: 'ActionTypes.Wall.WALL_LOADING',
    WALL_LOADING_SUCCESS: 'ActionTypes.Wall.WALL_LOADING_SUCCESS',
    WALL_LOADING_ERROR: 'ActionTypes.Wall.WALL_LOADING_ERROR'
  },
  Stock: {
    STOCK_LOADING: 'ActionTypes.Stock.STOCK_LOADING',
    STOCK_LOADING_SUCCESS: 'ActionTypes.Stock.STOCK_LOADING_SUCCESS',
    STOCK_LOADING_FAILURE: 'ActionTypes.Stock.STOCK_LOADING_FAILURE',
    STOCK_ADD: 'ActionTypes.Stock.STOCK_ADD',
    STOCK_ADD_SUCCESS: 'ActionTypes.Stock.STOCK_ADD_SUCCESS',
    STOCK_ADD_FAILURE: 'ActionTypes.Stock.STOCK_ADD_FAILURE'
  }

}

export default ActionTypes;