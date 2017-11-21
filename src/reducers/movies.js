import {
  REQUEST_FILMS,
  RECEIVE_FILMS,
  REQUEST_FILM,
  RECEIVE_FILM,
  TOGGLE_FILM
} from '../actions'

const movies = (state = {
  isFetching: false,
  films: []
}, action) => {
  const syncFavoriteItems = (items) => {
    localStorage.setItem('selectedItems', items);
  }
  let storageItems = localStorage.getItem('selectedItems'),
      favoriteItems = storageItems ? storageItems.split(',') : [];

  const getFilmsWithFavorites = (films) => {
    const filmWithFavories = films.map((f) => {
      f.isSelected = favoriteItems.some((item) => item === (f.id).toString());
      return f;
    });
    return filmWithFavories;
  };

  const getFilmWithFavorites = (film) => {
    film.isSelected = favoriteItems.some((item) => item === (film.id).toString());
    return film;
  }
  switch (action.type) {
    case TOGGLE_FILM:
    const filmId = action.FILM.toString();
      if (favoriteItems.some(x => x === filmId)) {
        favoriteItems = favoriteItems.filter(x => x !== filmId);
      } else {
        favoriteItems.push(filmId);
      }
      syncFavoriteItems(favoriteItems);
      return Object.assign({}, state, {
        films: action.films ? getFilmsWithFavorites(action.films) : [],
        film: action.film ? getFilmWithFavorites(action.film) : null,
      })
    case REQUEST_FILMS:
      return Object.assign({}, state, {
        isFetching: true,
        films: []
      })
    case RECEIVE_FILMS:
      return Object.assign({}, state, {
        isFetching: false,
        films: getFilmsWithFavorites(action.films)
      })
    case REQUEST_FILM:
      return Object.assign({}, state, {
        isFetching: true,
        film: null
      })
    case RECEIVE_FILM:
      return Object.assign({}, state, {
        isFetching: false,
        film: getFilmWithFavorites(action.film)
      })
    default:
      return state
  }
}

export default movies
