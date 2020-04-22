import { combineReducers } from 'redux-immutable';

import comment from './comment';
import order from './order';
import product from './product';
import shop from './shop';
import ad from './ad';

const domainReducer = combineReducers({
  comment,
  order,
  product,
  shop,
  ad
});

export default domainReducer;
