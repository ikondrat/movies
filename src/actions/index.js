import fetch from 'isomorphic-fetch'

export const REQUEST_FILM = 'REQUEST_FILM'
export const REQUEST_FILMS = 'REQUEST_FILMS'
export const RECEIVE_FILMS = 'RECEIVE_FILMS'
export const RECEIVE_FILM = 'RECEIVE_FILM'
export const TOGGLE_FILM= 'TOGGLE_FILM'
export const INVALIDATE_FILM= 'INVALIDATE_FILM'

export function toggleFilm(FILM) {
  return {
    type: TOGGLE_FILM,
    FILM
  }
}

export function invalidateFilm(FILM) {
  return {
    type: INVALIDATE_FILM,
    FILM
  }
}

function requestFilms() {
  return {
    type: REQUEST_FILMS
  }
}

function requestFilm(FILM) {
  return {
    type: REQUEST_FILM,
    FILM
  }
}

function receiveFilms(films) {
  return {
    type: RECEIVE_FILMS,
    films: films,
    receivedAt: Date.now()
  }
}

function receiveFilm(FILM, json) {
  debugger;
  return {
    type: RECEIVE_FILM,
    FILM,
    films: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchFilms() {
  return dispatch => {
    dispatch(requestFilms())
    return fetch(`https://micro-server-cuzctssnnq.now.sh/api/films.json`)
      .then((response, data) => {
        return response.json()
      })
      .then(json => dispatch(receiveFilms(json)))
  }
}

function fetchFilm(filmId) {
  return dispatch => {
    dispatch(requestFilm(filmId))
    return fetch(`https://awa5lhb067.execute-api.eu-central-1.amazonaws.com/dev/movie/${filmId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveFilm(filmId, json)))
  }
}

function shouldFetchFilms(state) {
  return true;
}

export function fetchFilmsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchFilms(getState())) {
      return dispatch(fetchFilms())
    }
  }
}