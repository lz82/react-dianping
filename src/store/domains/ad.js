import { fromJS } from 'immutable'

const defaultState = {
  headLine: []
}

export default (state = fromJS(defaultState), action) => {
  return state
}
