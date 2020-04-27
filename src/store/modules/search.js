import { fromJS } from 'immutable';
import { QUERY_DATA } from '@/store/middlewares/query-api';
import { searchApi } from '@/services';
// #region [action-types]

export const actionTypes = {
  SEARCH_INPUT_CHANGE: 'search/search_input_change',

  HOT_SEARCH_FETCH: 'search/hot_search_fetch',
  HOT_SEARCH_FETCH_SUCCESS: 'search/hot_search_fetch_success',
  HOT_SEARCH_FETCH_FAILURE: 'search/hot_search_fetch_failure',

  RELATED_SEARCH_FETCH: 'search/related_search_fetch',
  RELATED_SEARCH_FETCH_SUCCESS: 'search/related_search_fetch_success',
  RELATED_SEARCH_FETCH_FAILURE: 'search/related_search_fetch_failure',

  SEARCH_HISTORY_ADD: 'search/search_history_add',
  SEARCH_HISTORY_CLEAR: 'search/search_history_clear'
};

// #endregion

// #region [action-creators]

const hotSearchFetch = () => {
  return {
    type: actionTypes.HOT_SEARCH_FETCH
  };
};

const hotSearchFetchSuccess = (data) => {
  return {
    type: actionTypes.HOT_SEARCH_FETCH_SUCCESS,
    queryResult: data
  };
};

const hotSearchFetchFailure = (err) => {
  return {
    type: actionTypes.hotSearchFetchFailure,
    error: err
  };
};

const relatedSearchFetch = () => {
  return {
    type: actionTypes.RELATED_SEARCH_FETCH
  };
};

const relatedSearchFetchSuccess = (data) => {
  return {
    type: actionTypes.RELATED_SEARCH_FETCH_SUCCESS,
    queryResult: data
  };
};

const relatedSearchFetchFailure = (err) => {
  return {
    type: actionTypes.RELATED_SEARCH_FETCH_FAILURE,
    error: err
  };
};

export const actionCreators = {
  searchInputValChange: (val) => {
    console.log(val);
    return {
      type: actionTypes.SEARCH_INPUT_CHANGE,
      payload: val
    };
  },

  queryHotSearch: (...params) => {
    const reducers = {
      reducerRequest: hotSearchFetch,
      reducerSuccess: hotSearchFetchSuccess,
      reducerFailure: hotSearchFetchFailure
    };
    return {
      [QUERY_DATA]: {
        reducers,
        api: searchApi.queryHotSearch
      },
      ...params
    };
  },

  queryRelatedSearch: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: relatedSearchFetch,
      reducerSuccess: relatedSearchFetchSuccess,
      reducerFailure: relatedSearchFetchFailure
    };
    return {
      [QUERY_DATA]: {
        reducers,
        api: searchApi.queryRelatedSearch,
        apiParams
      },
      ...params
    };
  },

  addSearchHistory: (payload) => {
    return {
      type: actionTypes.SEARCH_HISTORY_ADD,
      payload
    };
  },

  clearSearchHistory: () => {
    return {
      type: actionTypes.SEARCH_HISTORY_CLEAR
    };
  }
};

// #endregion

// #region [selector]

export const searchInputVal = (state) => {
  return state.getIn(['search', 'inputVal']);
};

export const hotSearch = (state) => {
  const temp = state.getIn(['search', 'hot']);
  return temp ? temp.toJS() : [];
};

export const relatedSearch = (state) => {
  const temp = state.getIn(['search', 'related']);
  return temp && temp.toJS ? temp.toJS() : [];
};

export const searchHistory = (state) => {
  const temp = state.getIn(['search', 'history']);
  return temp && temp.toJS ? temp.toJS() : [];
};

// #endregion

// #region [reducer]

const defaultState = {
  inputVal: '',
  isLoading: false,
  hot: [],
  related: [],
  history: ['喜茶']
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.SEARCH_INPUT_CHANGE:
      return state.set('inputVal', action.payload);

    case actionTypes.HOT_SEARCH_FETCH:
      return state.set('isLoading', true);
    case actionTypes.HOT_SEARCH_FETCH_SUCCESS:
      return state.merge({
        isLoading: false,
        hot: fromJS(action.queryResult)
      });
    case actionTypes.HOT_SEARCH_FETCH_FAILURE:
      return state.merge({
        isLoading: false,
        hot: []
      });

    case actionTypes.RELATED_SEARCH_FETCH:
      return state.set('isLoading', true);
    case actionTypes.RELATED_SEARCH_FETCH_SUCCESS:
      return state.merge({
        isLoading: false,
        related: fromJS(action.queryResult)
      });
    case actionTypes.RELATED_SEARCH_FETCH_FAILURE:
      return state.merge({
        isLoading: false,
        related: []
      });

    case actionTypes.SEARCH_HISTORY_ADD:
      // eslint-disable-next-line no-case-declarations
      const history = state.get('history').toJS();
      // eslint-disable-next-line no-case-declarations
      const temp = history.find((item) => item.keyword === action.payload);
      if (!temp) {
        return state.set(fromJS(history.unshift(action.payload)));
      } else {
        return state;
      }
    case actionTypes.SEARCH_HISTORY_CLEAR:
      return state.set('history', []);

    default:
      return state;
  }
};

// #endregion
