import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { QUERY_DATA } from '@/store/middlewares/query-api';
import { userApi } from '@/services';

// #region [action-types]

export const actionTypes = {
  FETCH_ORDER_LIST_REQUEST: 'user/fetch_order_list_request',
  FETCH_ORDER_SUCCESS: 'user/fetch_order_list_success',
  FETCH_ORDER_FAILURE: 'user/fetch_order_list_failure',

  SET_TOKEN: 'user/set_token',

  CHANGE_CURRENT_TAB: 'user/change_current_tab',

  DELETE_ORDER_REQUEST: 'user/delete_order_request',
  DELETE_ORDER_SUCCESS: 'user/delete_order_success',
  DELETE_ORDER_FAILURE: 'user/delete_order_failure'
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

const deleteOrderRequest = (id) => {
  return {
    type: actionTypes.DELETE_ORDER_REQUEST,
    payload: id
  };
};

const deleteOrderSuccess = (id) => {
  return {
    type: actionTypes.DELETE_ORDER_SUCCESS,
    payload: id
  };
};

const deleteOrderFailure = (msg) => {
  return {
    type: actionTypes.DELETE_ORDER_FAILURE,
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

  changeCurrentTab: (tab) => {
    return {
      type: actionTypes.CHANGE_CURRENT_TAB,
      payload: tab
    };
  },

  deleteOrder: (id) => {
    return (dispatch, getState) => {
      dispatch(deleteOrderRequest(id));
      setTimeout(() => {
        if (Math.random() > 0.1) {
          dispatch(deleteOrderSuccess(id));
          const currentTab = getState().getIn(['user', 'currentTab']);
          dispatch(actionCreators.queryOrderList(currentTab));
        } else {
          dispatch(deleteOrderFailure('删除 订单失败，请重试！'));
        }
      }, 500);
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
  currentOrder: {
    orderId: '',
    isDeleting: false
  }
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

const reducerTab = (state = defaultState.currentTab, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_TAB:
      console.log(state);
      return action.payload;
    default:
      return state;
  }
};

const reducerCurrentOrder = (state = fromJS(defaultState.currentOrder), action) => {
  switch (action.type) {
    case actionTypes.DELETE_ORDER_REQUEST:
      return state.merge({
        orderId: action.payload,
        isDeleting: true
      });
    case actionTypes.DELETE_ORDER_SUCCESS:
      return state.merge({
        orderId: '',
        isDeleting: false
      });
    case actionTypes.DELETE_ORDER_FAILURE:
      return state.merge({
        orderId: '',
        isDeleting: false
      });

    default:
      return state;
  }
};

export default combineReducers({
  order: reducerOrder,
  currentTab: reducerTab,
  currentOrder: reducerCurrentOrder
});
