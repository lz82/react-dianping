import { fromJS } from 'immutable';

// #region [action-types]

export const actionTypes = {
  USERNAME_CHANGE: 'login/username_change',
  PWD_CHANGE: 'login/pwd_change',
  TOKEN_CHANGE: 'login/token_change',
  LOGIN_FAILURE: 'login/login_failure',
  LOGIN_SUCCESS: 'login/login_success'
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

  loginSuccess: (token) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: token
    };
  },

  loginFailure: (msg) => {
    return {
      type: actionTypes.LOGIN_FAILURE,
      error: msg
    };
  },

  login: () => {
    return (dispatch, getState) => {
      const username = getState().getIn(['login', 'username']);
      const pwd = getState().getIn(['login', 'pwd']);
      if (username && pwd) {
        setTimeout(() => {
          const token = 'dianping-token';
          localStorage.setItem('token', token);
          dispatch(actionCreators.loginSuccess(token));
        }, 500);
      } else {
        dispatch(actionCreators.loginFailure('手机号和密码为必填项'));
      }
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
  token: localStorage.getItem('token'),
  isLoading: false
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.USERNAME_CHANGE:
      return state.set('username', action.payload);
    case actionTypes.PWD_CHANGE:
      return state.set('pwd', action.payload);
    case actionTypes.LOGIN_SUCCESS:
      return state.set('token', action.payload);

    case actionTypes.TOKEN_CHANGE:
      if (!action.payload) {
        localStorage.removeItem('token');
      }
      return state.set('token', action.payload);
    default:
      return state;
  }
};
