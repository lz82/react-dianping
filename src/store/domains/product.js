import { fromJS } from 'immutable';

export const schema = {
  domainName: 'product',
  id: 'id'
};

const defaultState = {
  likeList: []
};

export default (state = fromJS(defaultState), action) => {
  if (action.queryResult && action.queryResult.product) {
    return state.set('likeList', action.queryResult.product);
  }
  return state;
};
