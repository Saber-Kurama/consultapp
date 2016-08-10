import { createSelector } from 'reselect'
import { OrderedSet, fromJS } from 'immutable'

const entitiesSelector = state => state.entities.get('doctors')
const stateSelector = state => state.doctors

let doctors_data = OrderedSet(fromJS([]))
export const doctorsSelector = createSelector(
  entitiesSelector,
  stateSelector,
  ( entitiy, state) => {
    console.log('entitiy', entitiy.toJS())
    // let data = OrderedSet([])
    // state.map()

    let array = []
    state.get('result').forEach( (id) => {
      array.push(entitiy.get(id).toJS())
    })
    doctors_data = doctors_data.union(fromJS(array))
    return doctors_data
  }
)
