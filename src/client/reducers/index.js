import { combineReducers } from 'redux'
// import questions from 'reducers/questions'
// import questionDetail from 'reducers/questionDetail'
import { routerReducer as routing } from 'react-router-redux'
import entities from './entities'
import doctors from './doctors'
// console.log(entities);
const rootReducer = combineReducers({
  entities,
  doctors,
  // questions,
  // questionDetail
  routing
})

export default rootReducer
