import { fromJS } from 'immutable';
import { appApi, homeApi } from '@/services';
import { QUERY_DATA } from '@/store/middlewares/query-api';
import { schema } from '@/store/domains/product';

// #region [action-types]
export const actionTypes = {
  // 猜你喜欢
  QUERY_LIKES: 'home/query_likes',
  FETCH_LIKES_REQUEST: 'home/fetch_likes_request',
  FETCH_LIKES_SUCCESS: 'home/fetch_likes_success',
  FETCH_LIKES_FAILURE: 'home/fetch_likes_failure',

  // HeadLine
  QUERY_HEADLINE: 'home/query_headline',
  FETCH_HEADLINE_REQUEST: 'home/fetch_headline_request',
  FETCH_HEADLINE_SUCCESS: 'home/fetch_headline_success',
  FETCH_HEADLINE_FAILURE: 'home/fetch_headline_failure'
};

// #endregion

// #region [action-creators]

// 猜你喜欢
const fetchLikesRequest = () => {
  return {
    type: actionTypes.FETCH_LIKES_REQUEST
  };
};

const fetchLikesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_LIKES_SUCCESS,
    queryResult: data
  };
};

const fetchLikesFailure = (msg) => {
  return {
    type: actionTypes.FETCH_LIKES_FAILURE,
    error: msg
  };
};

// HeadLine
const fetchHeadLineRequest = () => {
  return {
    type: actionTypes.FETCH_HEADLINE_REQUEST
  };
};

const fetchHeadLineSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HEADLINE_SUCCESS,
    queryResult: data
  };
};

const fetchHeadLineFailure = (msg) => {
  return {
    type: actionTypes.FETCH_HEADLINE_FAILURE,
    error: msg
  };
};

export const actionCreators = {
  queryLikes: (...params) => {
    const reducers = {
      reducerRequest: fetchLikesRequest,
      reducerSuccess: fetchLikesSuccess,
      reducerFailure: fetchLikesFailure
    };
    return {
      [QUERY_DATA]: {
        reducers,
        schema,
        api: appApi.queryLikes
      },
      ...params
    };
  },

  queryHeadLine: (...params) => {
    const reducers = {
      reducerRequest: fetchHeadLineRequest,
      reducerSuccess: fetchHeadLineSuccess,
      reducerFailure: fetchHeadLineFailure
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
  likeList: [],
  headline: [],
  errMsg: ''
};

// #endregion

// #region [selectors]
export const getLikeList = (state) => {
  return state.getIn(['home', 'likeList']);
};
// #endregion

// #region [reducer]
export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIKES_REQUEST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_LIKES_SUCCESS:
      return state.merge({
        isLoading: false,
        likeList: fromJS(action.queryResult.product)
      });
    case actionTypes.FETCH_LIKES_FAILURE:
      return state.merge({
        isLoading: false,
        errMsg: action.error
      });
    case actionTypes.FETCH_HEADLINE_REQUEST:
      return state.set('isLoading', true);
    case actionTypes.FETCH_HEADLINE_SUCCESS:
      return state.merge({
        isLoading: false,
        headline: fromJS(action.queryResult.product)
      });
    case actionTypes.FETCH_HEADLINE_FAILURE:
      return state.merge({
        isLoading: false,
        errMsg: action.error
      });
    default:
      return state;
  }
};
// #endregion
