import { combineReducers } from 'redux'
import {
  TOGGLE_FILM
} from '../actions'
import movies from './movies';

function selectedFilms(state = localStorage.getItem('selectedItems').split(','), action) {
 
switch (action.type) {
  case TOGGLE_FILM:
    if (state.some(x => x === (action.FILM).toString())) {
      state = state.filter(x => x !== (action.FILM).toString());
    } else {
      state.push(action.FILM);
    }
    
    localStorage.setItem('selectedItems', state);
    return state;
  default:
    return state
  }
}

const rootReducer = combineReducers({
  movies,
  selectedFilms
})

export default rootReducer
