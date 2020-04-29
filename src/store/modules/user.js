import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { QUERY_DATA } from '@/store/middlewares/query-api';

// #region [action-types]

export const actionTypes = {
  FETCH_ORDER_LIST_REQUEST: 'user/fetch_order_list_request',
  FETCH_ORDER_SUCCESS: 'user/fetch_order_list_success',
  FETCH_ORDER_FAILURE: 'user/fetch_order_list_failure'
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
        apiParams
      },
      ...params
    };
  }
};

// #endregion

const defaultState = {
  order: {
    isLoading: false,
    list: []
  },
  currentTab: 0,
  currentOrder: {}
};

const reducerOrder = (state = fromJS(defaultState.order), action) => {
  switch (action.type) {
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
