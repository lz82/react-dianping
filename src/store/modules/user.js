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

  SHOW_DELETE_CONFIRM: 'user/show_delete_confirm',
  HIDE_DELETE_CONFIRM: 'user/hide_delete_confirm',

  DELETE_ORDER_REQUEST: 'user/delete_order_request',
  DELETE_ORDER_SUCCESS: 'user/delete_order_success',
  DELETE_ORDER_FAILURE: 'user/delete_order_failure',

  SHOW_COMMENT_EDIT: 'user/show_comment_edit',
  HIDE_COMMENT_EDIT: 'user/hide_comment_edit',

  CHANGE_COMMENT: 'user/change_comment',
  CHANGE_RATE: 'user/change_rate'
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

const deleteOrderRequest = () => {
  return {
    type: actionTypes.DELETE_ORDER_REQUEST
  };
};

const deleteOrderSuccess = () => {
  return {
    type: actionTypes.DELETE_ORDER_SUCCESS
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

  showDeleteConfirm: (orderId) => {
    return {
      type: actionTypes.SHOW_DELETE_CONFIRM,
      payload: orderId
    };
  },

  hideDeleteConfirm: () => {
    return {
      type: actionTypes.HIDE_DELETE_CONFIRM
    };
  },

  deleteOrder: () => {
    return (dispatch, getState) => {
      const orderId = getState().getIn(['user', 'currentOrder', 'orderId']);
      console.log('delete order id:', orderId);
      dispatch(deleteOrderRequest());
      setTimeout(() => {
        if (Math.random() > 0.1) {
          dispatch(deleteOrderSuccess());
          const currentTab = getState().getIn(['user', 'currentTab']);
          dispatch(actionCreators.queryOrderList(currentTab));
        } else {
          dispatch(deleteOrderFailure('删除 订单失败，请重试！'));
        }
      }, 500);
    };
  },

  showCommentEdit: (orderId) => {
    return {
      type: actionTypes.SHOW_COMMENT_EDIT,
      payload: orderId
    };
  },

  hideCommentEdit: () => {
    return {
      type: actionTypes.HIDE_COMMENT_EDIT
    };
  },

  changeComment: (val) => {
    return {
      type: actionTypes.CHANGE_COMMENT,
      payload: val
    };
  },

  changeRate: (val) => {
    return {
      type: actionTypes.CHANGE_RATE,
      payload: val
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

export const getDeletingOrderId = (state) => {
  const currentOrder = state.getIn(['user', 'currentOrder']);
  if (currentOrder.get('orderId') && currentOrder.get('isDeleting')) {
    return currentOrder.get('orderId');
  } else {
    return '';
  }
};

export const getCommentingOrderId = (state) => {
  const currentOrder = state.getIn(['user', 'currentOrder']);
  if (currentOrder.get('orderId') && currentOrder.get('isCommenting')) {
    return currentOrder.get('orderId');
  } else {
    return '';
  }
};

export const getComment = (state) => {
  return state.getIn(['user', 'currentOrder', 'comment']);
};

export const getRate = (state) => {
  return state.getIn(['user', 'currentOrder', 'rate']);
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
    isDeleting: false,
    isLoading: false,
    isCommenting: false,
    comment: '',
    rate: 0
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
      return action.payload;
    default:
      return state;
  }
};

const reducerCurrentOrder = (state = fromJS(defaultState.currentOrder), action) => {
  switch (action.type) {
    case actionTypes.SHOW_DELETE_CONFIRM:
      return state.merge({
        orderId: action.payload,
        isDeleting: true
      });
    case actionTypes.HIDE_DELETE_CONFIRM:
      return state.merge({
        orderId: '',
        isDeleting: false
      });

    case actionTypes.DELETE_ORDER_REQUEST:
      return state.set('isLoading', true);
    case actionTypes.DELETE_ORDER_SUCCESS:
      return state.merge({
        orderId: '',
        isLoading: false,
        isDeleting: false
      });
    case actionTypes.DELETE_ORDER_FAILURE:
      return state.merge({
        isLoading: false
      });

    case actionTypes.SHOW_COMMENT_EDIT:
      return state.merge({
        orderId: action.payload,
        isCommenting: true
      });
    case actionTypes.HIDE_COMMENT_EDIT:
      return state.merge({
        orderId: '',
        isCommenting: false,
        comment: '',
        rate: 0
      });

    case actionTypes.CHANGE_COMMENT:
      return state.set('comment', action.payload);
    case actionTypes.CHANGE_RATE:
      return state.set('rate', action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  order: reducerOrder,
  currentTab: reducerTab,
  currentOrder: reducerCurrentOrder
});
