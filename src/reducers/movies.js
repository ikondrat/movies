import {
  REQUEST_FILMS,
  RECEIVE_FILMS
} from '../actions'

function films(state = {
  isFetching: false,
  didInvalidate: false,
  films: []
}, action) {
  switch (action.type) {
    case REQUEST_FILMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_FILMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        films: action.films,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const movies = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_FILMS:
    case REQUEST_FILMS:
      return Object.assign({}, state, {
        moviesList: films(state[action.films], action)
      })
    default:
      return state
  }
}

export default movies
