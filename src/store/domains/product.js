import { fromJS } from 'immutable';

export const schema = {
  domainName: 'product',
  id: 'id'
};

const defaultState = [];

export default (state = fromJS(defaultState), action) => {
  if (action.queryResult && action.queryResult.product) {
    return state.merge(action.queryResult.product);
  }
  return state;
};
