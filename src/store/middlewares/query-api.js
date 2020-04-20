const QUERY_DATA = 'query_data'

export class QueryApiModel {
  constructor(reducers, api, schema) {
    const { reducerRequest, reducerSuccess, reducerFailure } = reducers
    const { domain } = schema
    this.reducerRequest = reducerRequest
    this.reducerSuccess = reducerSuccess
    this.reducerFailure = reducerFailure
    this.api = api
    this.domain = domain
    // this.category = QUERY_DATA
  }
  category = QUERY_DATA
}

export default store => next => async action => {
  console.log('middleware', action, next, store, action.category)
  if (action.category !== QUERY_DATA) {
    return next(action)
  }
  const { reducers, api } = action
  const { reducerRequest, reducerSuccess, reducerFailure } = reducers
  next(reducerRequest())
  try {
    const res = await api()
    console.log('res', res)
    next(reducerSuccess(res))
  } catch (err) {
    next(reducerFailure(err))
  }
}
