import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import { QUERY_DATA } from '@/store/middlewares/query-api';

import { productApi } from '@/services';

export const actionTypes = {
  FETCH_PRODUCT_INFO: 'purchase/fetch_product_info',
  FETCH_PRODUCT_INFO_SUCCESS: 'purchase/fetch_product_info_success',
  FETCH_PRODUCT_INFO_FAILURE: 'purchase/fetch_product_info_failure',

  DECREASE_CNT: 'purchase/decrease_cnt',
  INCREASE_CNT: 'purchase/increase_cnt',

  SUBMIT_ORDER_REQUEST: 'purchase/submit_order_request',
  SUBMIT_ORDER_SUCCESS: 'purchase/submit_order_success',
  SUBMIT_ORDER_FAILURE: 'purchase/submit_order_failure'
};

const fetchProductRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_INFO
  };
};

const fetchProductSuccess = (val) => {
  return {
    type: actionTypes.FETCH_PRODUCT_INFO_SUCCESS,
    queryResult: val
  };
};

const fetchProductFailure = (errMsg) => {
  return {
    type: actionTypes.FETCH_PRODUCT_INFO_FAILURE,
    error: errMsg
  };
};

const submitOrderRequset = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_REQUEST
  };
};

const submitOrderSuccess = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_SUCCESS
  };
};

const submitOrderFailure = () => {
  return {
    type: actionTypes.SUBMIT_ORDER_FAILURE
  };
};

export const actionCreators = {
  queryProductInfo: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: fetchProductRequest,
      reducerSuccess: fetchProductSuccess,
      reducerFailure: fetchProductFailure
    };

    return {
      [QUERY_DATA]: {
        reducers,
        api: productApi.getProductDetailById,
        apiParams: apiParams
      },
      ...params
    };
  },

  decreaseCnt: () => {
    return {
      type: actionTypes.DECREASE_CNT
    };
  },

  increaseCnt: () => {
    return {
      type: actionTypes.INCREASE_CNT
    };
  },

  submitOrder: () => {
    return (dispatch, getState) => {
      dispatch(submitOrderRequset());
      setTimeout(() => {
        if (Math.random() > 0.5) {
          dispatch(submitOrderSuccess());
        } else {
          dispatch(submitOrderFailure('创建订单失败，请重试！'));
        }
      }, 500);
    };
  }
};

export const getProductInfo = (state) => {
  const temp = state.getIn(['purchase', 'product', 'info']);
  return temp ? temp.toJS() : {};
};

export const getProductCnt = (state) => {
  const temp = state.getIn(['purchase', 'settle', 'cnt']);
  return temp;
};

export const getTotalPrice = (state) => {
  const product = getProductInfo(state);
  const cnt = getProductCnt(state);
  return ((product.currentPrice ? product.currentPrice : 0) * cnt).toFixed(2);
};

const defaultState = {
  product: {
    isLoading: false,
    info: {}
  },
  settle: {
    cnt: 1
  },
  isSubmiting: false
};

const productReducer = (state = fromJS(defaultState.product), action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_INFO:
      return state.set('isLoading', true);
    case actionTypes.FETCH_PRODUCT_INFO_SUCCESS:
      return state.merge({
        isLoading: false,
        info: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_PRODUCT_INFO_FAILURE:
      return state.merge({
        isLoading: false,
        info: fromJS({})
      });
    default:
      return state;
  }
};

const settleReducer = (state = fromJS(defaultState.settle), action) => {
  const current = state.get('cnt');
  switch (action.type) {
    case actionTypes.DECREASE_CNT:
      return state.set('cnt', current - 1 > 0 ? current - 1 : 1);
    case actionTypes.INCREASE_CNT:
      return state.set('cnt', current + 1);
    default:
      return state;
  }
};

const purchaseReducer = (state = defaultState.isSubmiting, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER_REQUEST:
      return true;
    case actionTypes.SUBMIT_ORDER_SUCCESS:
      return false;
    case actionTypes.submitOrderFailure:
      return false
    default:
      return state;
  }
};

export default combineReducers({
  product: productReducer,
  settle: settleReducer,
  isSubmiting: purchaseReducer
});
