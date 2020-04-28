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
  SEARCH_HISTORY_CLEAR: 'search/search_history_clear',

  SEARCH_RESULT_FETCH: 'search/search_result_fetch',
  SEARCH_RESULT_FETCH_SUCCESS: 'search/search_result_fetch_success',
  SEARCH_RESULT_FETCH_FAILURE: 'search/search_result_fetch_failure'
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

const searchResultFetch = () => {
  return {
    type: actionTypes.SEARCH_RESULT_FETCH
  };
};

const searchResultSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_RESULT_FETCH_SUCCESS,
    queryResult: data
  };
};

const searchResultFailure = (err) => {
  return {
    type: actionTypes.SEARCH_RESULT_FETCH_FAILURE,
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

  addSearchHistory: (keyword) => {
    return {
      type: actionTypes.SEARCH_HISTORY_ADD,
      payload: keyword
    };
  },

  clearSearchHistory: () => {
    return {
      type: actionTypes.SEARCH_HISTORY_CLEAR
    };
  },

  querySearchResult: (apiParams, ...params) => {
    const reducers = {
      reducerRequest: searchResultFetch,
      reducerSuccess: searchResultSuccess,
      reducerFailure: searchResultFailure
    };

    return {
      [QUERY_DATA]: {
        reducers,
        api: searchApi.querySearchResult,
        apiParams
      },
      ...params
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

export const currentSearchKeyword = (state) => {
  const temp = state.getIn(['search', 'history']);
  if (temp && temp.toJS && temp.toJS().length > 0) {
    return temp.toJS()[0];
  } else {
    return '';
  }
};

export const searchResult = (state) => {
  const temp = state.getIn(['search', 'result']);
  return temp ? temp.toJS() : [];
};

// #endregion

// #region [reducer]

const defaultState = {
  inputVal: '',
  isLoading: false,
  hot: [],
  related: [],
  history: ['喜茶'],
  result: []
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
        hot: fromJS([])
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
        related: fromJS([])
      });

    case actionTypes.SEARCH_HISTORY_ADD:
      // eslint-disable-next-line no-case-declarations
      const history = state.get('history').toJS();
      // eslint-disable-next-line no-case-declarations
      const temp = history.findIndex((item) => item === action.payload);
      if (temp === -1) {
        return state.set('history', fromJS([action.payload].concat(history)));
      } else {
        history.splice(temp, 1);
        return state.set('history', fromJS([action.payload].concat(history)));
      }
    case actionTypes.SEARCH_HISTORY_CLEAR:
      return state.set('history', fromJS([]));

    case actionTypes.SEARCH_RESULT_FETCH:
      return state.set('isLoading', true);
    case actionTypes.SEARCH_RESULT_FETCH_SUCCESS:
      return state.merge({
        isLoading: false,
        result: fromJS(action.queryResult)
      });
    case actionTypes.SEARCH_RESULT_FETCH_FAILURE:
      return state.merge({
        isLoading: false,
        result: fromJS([])
      });

    default:
      return state;
  }
};

// #endregion
