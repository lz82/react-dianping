import { fromJS } from 'immutable';

// #region [action-types]

export const actionTypes = {
  USERNAME_CHANGE: 'login/username_change',
  PWD_CHANGE: 'login/pwd_change',
  TOKEN_CHANGE: 'login/token_change'
};

// #endregion

// #region [action-creator]

export const actionCreators = {
  changeUsername: (val) => {
    return {
      type: actionTypes.USERNAME_CHANGE,
      payload: val
    };
  },

  changePWD: (val) => {
    return {
      type: actionTypes.PWD_CHANGE,
      payload: val
    };
  },

  changeToken: (val) => {
    return {
      type: actionTypes.TOKEN_CHANGE,
      payload: val
    };
  },

  login: () => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actionCreators.changeToken('dianping-token'));
      }, 500);
    };
  }
};

// #endregion

// #region [selectors]

export const getUsername = (state) => {
  return state.getIn(['login', 'username']);
};

export const getPWD = (state) => {
  return state.getIn(['login', 'pwd']);
};

export const getToken = (state) => {
  return state.getIn(['login', 'token']);
};

// #endregion

const defaultState = {
  username: '',
  pwd: '',
  token: '',
  isLoading: false
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.USERNAME_CHANGE:
      return state.set('username', action.payload);
    case actionTypes.PWD_CHANGE:
      return state.set('pwd', action.payload);
    case actionTypes.TOKEN_CHANGE:
      return state.set('token', action.payload);
    default:
      return state;
  }
};
