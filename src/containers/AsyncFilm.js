import React, { Component } from 'react'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import { 
  fetchFilmIfNeeded,
  toggleOneFilm
} from '../actions'
import Film from '../components/Film'

class FilmContainer extends Component {
  constructor(props) {
    super(props)
    this.toggleSelectedState = this.toggleSelectedState.bind(this)
  }

  componentDidMount() {
    const { dispatch, params} = this.props
    dispatch(
      fetchFilmIfNeeded(params.filmId)
    )
  }

  toggleSelectedState (filmId) {
    this.props.dispatch(toggleOneFilm(filmId, this.props.film))
  }

  render() {
    const { film, isFetching, lastUpdated } = this.props
    return (
      <div>
        <div className="card">
          <div className="card-content">
          {lastUpdated &&
            <h2>Films</h2>
          }
        {isFetching && film === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && film === 0 &&
          <h2>Empty.</h2>
        }
        {film &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Film film={film} toggleSelectedState={this.toggleSelectedState}/>
          </div>
        }
          </div>
        </div>
      </div>
    )
  }
}

FilmContainer.propTypes = {
  film: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  let stateData = state.movies && state.movies.film ? state.movies : {
    film: {},
    isFetching: true
  };

  return stateData;
}

export default connect(mapStateToProps)(FilmContainer)