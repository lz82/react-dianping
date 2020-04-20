import { fromJS } from 'immutable'
import { appApi } from '@/services'

export const actionTypes = {
  QUERY_LIKES: 'home/query_likes',
  FETCH_LIKES_REQUEST: 'home/fetch_likes_request',
  FETCH_LIKES_SUCCESS: 'home/fetch_likes_success',
  FETCH_LIKES_FAILURE: 'home/fetch_likes_failure'
}

const fetchLikesRequest = () => {
  return {
    type: actionTypes.FETCH_LIKES_REQUEST
  }
}

const fetchLikesSuccess = data => {
  return {
    type: actionTypes.FETCH_LIKES_SUCCESS,
    payload: data
  }
}

const fetchLikesFailure = msg => {
  return {
    type: actionTypes.FETCH_LIKES_FAILURE,
    payload: msg
  }
}

export const actionCreators = {
  queryLikes: () => {
    // return async (dispatch) => {
    //   dispatch(fetchLikesRequest())
    //   try {
    //     const likes = await appApi.queryLikes()
    //     dispatch(fetchLikesSuccess(likes))
    //   } catch(err) {
    //     dispatch(fetchLikesFailure(err))
    //   }
    // }
    const reducers = {
      reducerRequest: fetchLikesRequest,
      reducerSuccess: fetchLikesSuccess,
      reducerFailure: fetchLikesFailure
    }
    const schema = {
      domain: 'product'
    }
    return  {
      category: 'query_data',
      reducers,
      schema,
      api: appApi.queryLikes
    }
  }
}

const defaultState = {
  isLoading: false,
  list: [],
  errMsg: ''
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIKES_REQUEST:
      return state.set('isLoading', true)
    case actionTypes.FETCH_LIKES_SUCCESS:
      console.log('fromjs', fromJS(action.payload))
      return state.merge({
        isLoading: false,
        list: fromJS(action.payload)
      })
    case actionTypes.FETCH_LIKES_FAILURE:
      return state.merge({
        isLoading: false,
        errMsg: action.payload
      })
    default:
      return state;
  }
};
