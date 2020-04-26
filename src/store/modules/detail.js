import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { QUERY_DATA } from '@/store/middlewares/query-api';

import { productApi } from '@/services';

// #region [action-types]

export const actionTypes = {
  QUERY_DETAIL_BASIC: 'coupon/query_detail_basic',
  FETCH_DETAIL_BASIC: 'coupon/fetch_detail_basic',
  FETCH_DETAIL_BASIC_SUCCESS: 'coupon/fetch_detail_basic_success',
  FETCH_DETAIL_BASIC_FAILURE: 'coupon/fetch_detail_basic_failure',

  QUERY_DETAIL_SHOP: 'coupon/query_detail_shop',
  FETCH_DETAIL_SHOP: 'coupon/fetch_detail_shop',
  FETCH_DETAIL_SHOP_SUCCESS: 'coupon/fetch_detail_shop_success',
  FETCH_DETAIL_SHOP_FAILURE: 'coupon/fetch_detail_shop_failure'
};

// #endregion

// #region private [action-creators]
const fetchDetailBasic = () => {
  return {
    type: actionTypes.FETCH_DETAIL_BASIC
  };
};

const fetchDetailBasicSuccess = (val) => {
  return {
    type: actionTypes.FETCH_DETAIL_BASIC_SUCCESS,
    queryResult: val
  };
};

const fetchDetailBasicFailure = (errMsg) => {
  return {
    type: actionTypes.FETCH_DETAIL_BASIC_FAILURE,
    error: errMsg
  };
};

const fetchDetailShop = () => {
  return {
    type: actionTypes.FETCH_DETAIL_SHOP
  };
};

const fetchDetailShopSuccess = (val) => {
  return {
    type: actionTypes.FETCH_DETAIL_SHOP_SUCCESS,
    queryResult: val
  };
};

const fetchDetailShopFailure = (errMsg) => {
  return {
    type: actionTypes.FETCH_DETAIL_SHOP_FAILURE,
    error: errMsg
  };
};

// #endregion

// #region public [action-creators]

export const actionCreators = {
  queryDetailBasic: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: fetchDetailBasic,
      reducerSuccess: fetchDetailBasicSuccess,
      reducerFailure: fetchDetailBasicFailure
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

  queryDetailShop: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: fetchDetailShop,
      reducerSuccess: fetchDetailShopSuccess,
      reducerFailure: fetchDetailShopFailure
    };

    return {
      [QUERY_DATA]: {
        reducers,
        api: productApi.getShopById,
        apiParams: apiParams
      },
      ...params
    };
  }
};

// #endregion

// #region [selectors]

export const getDetailBasicInfo = (state) => {
  const temp = state.getIn(['detail', 'basicInfo', 'info']);
  return temp && temp.toJS ? temp.toJS() : {};
};

export const getDetailShopInfo = (state) => {
  const temp = state.getIn(['detail', 'shopInfo', 'info']);
  return temp && temp.toJS ? temp.toJS() : {};
};

// #endregion

// #region [reducer]

const defaultState = {
  basicInfo: {
    isLoading: false,
    info: {}
  },

  shopInfo: {
    isLoading: false,
    info: {}
  }
};

const basicReducer = (state = fromJS(defaultState.basicInfo), action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAIL_BASIC:
      return state.set('isLoading', true);
    case actionTypes.FETCH_DETAIL_BASIC_SUCCESS:
      return state.merge({
        isLoading: false,
        info: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_DETAIL_BASIC_FAILURE:
      return state.merge({
        isLoading: false,
        info: {}
      });
    default:
      return state;
  }
};

const shopReducer = (state = fromJS(defaultState.shopInfo), action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAIL_SHOP:
      return state.set('isLoading', true);
    case actionTypes.FETCH_DETAIL_SHOP_SUCCESS:
      return state.merge({
        isLoading: false,
        info: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_DETAIL_SHOP_FAILURE:
      return state.merge({
        isLoading: false,
        info: {}
      });
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  basicInfo: basicReducer,
  shopInfo: shopReducer
});

// #endregion

export default combineReducer;
