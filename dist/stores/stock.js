import { createStore } from 'redux';
import ActionTypes from 'dist/actions/ActionTypes';
import stockReducer from 'dist/reducers/reducers';

const stock = createStore(stockReducer);