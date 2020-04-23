import { fromJS } from 'immutable';
import { homeApi } from '@/services';
import { QUERY_DATA } from '@/store/middlewares/query-api';

// #region [action-types]
export const actionTypes = {
  // 首页
  QUERY_HOME: 'home/query_home',
  FETCH_HOME_REQUEST: 'home/fetch_home_request',
  FETCH_HOME_SUCCESS: 'home/fetch_home_success',
  FETCH_HOME_FAILURE: 'home/fetch_home_failure'
};

// #endregion

// #region [action-creators]

// 首页
const fetchHomeRequest = () => {
  return {
    type: actionTypes.FETCH_HOME_REQUEST
  };
};

const fetchHomeSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOME_SUCCESS,
    queryResult: data
  };
};

const fetchHomeFailure = (msg) => {
  return {
    type: actionTypes.FETCH_HOME_FAILURE,
    error: msg
  };
};

export const actionCreators = {
  queryHome: (...params) => {
    const reducers = {
      reducerRequest: fetchHomeRequest,
      reducerSuccess: fetchHomeSuccess,
      reducerFailure: fetchHomeFailure
    };
    return {
      [QUERY_DATA]: {
        reducers,
        api: homeApi.queryHomeAd
      },
      ...params
    };
  }
};
// #endregion

// #region [state]
const defaultState = {
  isLoading: false,
  homeAd: {},
  errMsg: ''
};

// #endregion

// #region [selectors]
export const getHeadLine = (state) => {
  const temp = state.getIn(['home', 'homeAd', 'headLine']);
  return temp ? temp.toJS() : [];
};

export const getDiscount = (state) => {
  const temp = state.getIn(['home', 'homeAd', 'discount']);
  return temp ? temp.toJS() : [];
};
// #endregion

// #region [reducer]
export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_REQUEST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_HOME_SUCCESS:
      return state.merge({
        isLoading: false,
        homeAd: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_HOME_FAILURE:
      return state.merge({
        isLoading: false,
        errMsg: action.error
      });
    default:
      return state;
  }
};
// #endregion
