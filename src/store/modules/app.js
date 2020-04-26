import { fromJS } from 'immutable';

export const actionTypes = {
  CLEAR_ERROR: 'app/clear_error'
};

export const actionCreators = {
  clearError: () => ({
    type: actionTypes.CLEAR_ERROR
  })
};

const defaultState = {
  errorMsg: ''
};

export default (state = fromJS(defaultState), action) => {
  const { type, error } = action;
  if (type === actionTypes.CLEAR_ERROR) {
    return state.set('errorMsg', '');
  } else if (error) {
    return state.set('errorMsg', error);
  } else {
    return state;
  }
};
