import fetch from 'isomorphic-fetch'

export const REQUEST_FILM = 'REQUEST_FILM'
export const REQUEST_FILMS = 'REQUEST_FILMS'
export const RECEIVE_FILMS = 'RECEIVE_FILMS'
export const RECEIVE_FILM = 'RECEIVE_FILM'
export const TOGGLE_FILM= 'TOGGLE_FILM'
export const INVALIDATE_FILM= 'INVALIDATE_FILM'

const apiURL = 'https://micro-server-yxyocybxvl.now.sh/api';

export function toggleFilm(FILM, films) {
  return {
    type: TOGGLE_FILM,
    films: films,
    FILM
  }
}

export function toggleOneFilm(FILM, film) {
  return {
    type: TOGGLE_FILM,
    film: film,
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
  return {
    type: RECEIVE_FILM,
    FILM,
    film: json,
    receivedAt: Date.now()
  }
}

function fetchFilms() {
  return dispatch => {
    dispatch(requestFilms())
    return fetch(`${apiURL}/movies`)
      .then((response, data) => {
        return response.json()
      })
      .then(json => dispatch(receiveFilms(json)))
  }
}

function fetchFilm(filmId) {
  return dispatch => {
    dispatch(requestFilm(filmId))
    return fetch(`${apiURL}/movies/${filmId}`)
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(receiveFilm(filmId, json)))
  }
}

function shouldFetchFilms(state) {
  return state.movies && state.movies.films.length > 9 ? false : true;
}

function shouldFetchFilm(state, filmId) {
  return state.movies && state.movies.films ? 
    !(state.movies.films.some(film => film.id.toString() === filmId)) : true;
}

export function fetchFilmIfNeeded(filmId) {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldFetchFilm(state, filmId)) {
      return dispatch(fetchFilm(filmId))
    } else {
      return dispatch(receiveFilm(
        filmId,
        state.movies.films.find(film => film.id.toString() === filmId)
      ));
    }

  }
}

export function fetchFilmsIfNeeded() {
  return (dispatch, getState) => {
    const films = getState();
    if (shouldFetchFilms(films)) {
      return dispatch(fetchFilms())
    } else {
      return dispatch(receiveFilms(films.movies.films))
    }
  }
}