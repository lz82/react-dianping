import { fromJS } from 'immutable';

const defaultState = {};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
