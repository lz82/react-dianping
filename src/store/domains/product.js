import { fromJS } from 'immutable';

export const schema = {
  domainName: 'product',
  id: 'id'
}

const defaultState = {
  list: []
};

export default (state = fromJS(defaultState), action) => {
  if (action.queryResult && action.queryResult.product) {
    return state.set('list', action.queryResult.product)
  }
  return state
};
