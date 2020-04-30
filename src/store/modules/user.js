import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { QUERY_DATA } from '@/store/middlewares/query-api';
import { userApi } from '@/services';

// #region [action-types]

export const actionTypes = {
  FETCH_ORDER_LIST_REQUEST: 'user/fetch_order_list_request',
  FETCH_ORDER_SUCCESS: 'user/fetch_order_list_success',
  FETCH_ORDER_FAILURE: 'user/fetch_order_list_failure',

  SET_TOKEN: 'user/set_token'
};

// #endregion

// #region [action-creators]

const fetchOrderListRequest = () => {
  return {
    type: actionTypes.FETCH_ORDER_LIST_REQUEST
  };
};

const fetchOrderListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    queryResult: data
  };
};

const fetchOrderListFailure = (msg) => {
  return {
    type: actionTypes.FETCH_ORDER_FAILURE,
    error: msg
  };
};

export const actionCreators = {
  queryOrderList: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: fetchOrderListRequest,
      reducerSuccess: fetchOrderListSuccess,
      reducerFailure: fetchOrderListFailure
    };
    return {
      [QUERY_DATA]: {
        reducers,
        apiParams,
        api: userApi.queryOrderList
      },
      ...params
    };
  },

  setToken: (token) => {
    return {
      type: actionTypes.SET_TOKEN,
      payload: token
    };
  }
};

// #endregion

// #region [action-selector]

export const getOrderList = (state) => {
  const temp = state.getIn(['user', 'order', 'list']);
  return temp ? temp.toJS() : [];
};

export const getCurrentTab = (state) => {
  return state.getIn(['user', 'currentTab']);
};

// #endregion

const defaultState = {
  order: {
    isLoading: false,
    list: []
  },
  currentTab: 999,
  currentOrder: {}
};

const reducerOrder = (state = fromJS(defaultState.order), action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDER_LIST_REQUEST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_ORDER_SUCCESS:
      return state.merge({
        isLoading: false,
        list: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_ORDER_FAILURE:
      return state.merge({
        isLoading: false,
        list: fromJS([])
      });

    default:
      return state;
  }
};

const reducerTab = (state = fromJS(defaultState.currentTab), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  order: reducerOrder,
  currentTab: reducerTab
});
