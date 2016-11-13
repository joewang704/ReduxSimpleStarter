import update from 'react-addons-update'
import { SELECT_CHILD, REMOVE_CHILD } from '../actions/graph'

const initialState = {
  up: [],
  current: {},
  children: []
}

function fetchChildren(topic) {

}

export default function graph(state = initialState, action) {
  switch(action.type) {
    case SELECT_CHILD:
      childList = fetchChildren(state.children[action.id].topic)
      newState = update(state, {
        up: {$push: state.current},
        current: {$set: state.children[action.id]},
        children: {$set: childList}
      })
      return newState
    case REMOVE_CHILD:
      childList = fetchChildren(state.up[-1].topic)
      newState = update(state, {
        current: {$set: state.up[-1]},
        up: {$splice: [[-1,1]]},
        children: {$set: childList}
      })
    default:
        return state
  }
}