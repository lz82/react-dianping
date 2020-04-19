import { combineReducers } from 'redux-immutable';

import comment from './comment';
import order from './order';
import product from './product';
import shop from './shop';

const domainReducer = combineReducers({
  comment,
  order,
  product,
  shop
});

export default domainReducer;
