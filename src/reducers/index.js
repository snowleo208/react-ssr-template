import {
  combineReducers
} from 'redux';
import {
  Actions
} from '../actions/index'

const initialState = {
  isLoading: true
}

function loadingStatus(state = initialState, action) {
  switch (action.type) {
    case Actions.CHANGE_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      })
    default:
      return state
  }
}

const mainReducer = combineReducers({
  loadingStatus
});

export default mainReducer;