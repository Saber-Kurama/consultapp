import { Record, Set } from 'immutable'
import {DOCTORS_REQUEST, DOCTORS_SUCCESS, DOCTORS_FAILURE} from '../constants/actiontypes'
const InitialState = Record({
  isFetching: false,
  result: Set([]),
  error: null
})
const initialState = new InitialState()
export default ( state = initialState,  actions) => {
  switch (actions.type) {
    case DOCTORS_REQUEST:
      return state.set('isFetching', true)
    case DOCTORS_SUCCESS:
      const newResult = state.get('result').union(actions.payload.result)
      return state.merge({
        result: newResult,
        isFetching: false,
        error: null
      })
    default:
      return state
  }
}
