import { fromJS } from 'immutable';
import { appApi } from '@/services';
import { QUERY_DATA } from '@/store/middlewares/query-api';
import { schema } from '@/store/domains/product'
// #region [action-types]
export const actionTypes = {
  QUERY_LIKES: 'home/query_likes',
  FETCH_LIKES_REQUEST: 'home/fetch_likes_request',
  FETCH_LIKES_SUCCESS: 'home/fetch_likes_success',
  FETCH_LIKES_FAILURE: 'home/fetch_likes_failure'
};

// #endregion

// #region [action-creators]
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
  }
};
// #endregion

// #region [state]
const defaultState = {
  isLoading: false,
  list: [],
  errMsg: ''
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
        list: fromJS(action.queryResult)
      });
    case actionTypes.FETCH_LIKES_FAILURE:
      return state.merge({
        isLoading: false,
        errMsg: action.error
      });
    default:
      return state;
  }
};
// #endregion
