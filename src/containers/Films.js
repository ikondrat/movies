import React, { Component } from 'react'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import { 
  fetchFilmsIfNeeded,
  toggleFilm
} from '../actions'
import List from '../components/List'

class Films extends Component {
  constructor(props) {
    super(props)
    this.toggleSelectedState = this.toggleSelectedState.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(
      fetchFilmsIfNeeded()
    )
  }

  componentWillReceiveProps(nextProps) {
    // alert('recieve props');
    // const { dispatch } = nextProps
    //dispatch(fetchFilmsIfNeeded())
    /*
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchFilmsIfNeeded(selectedSubreddit))
    }
    */
  }

  toggleSelectedState (filmId) {
    this.props.dispatch(toggleFilm(filmId))
  }

  handleRefreshClick(e) {
    e.preventDefault()
    alert('refresh');
    // const { dispatch} = this.props
    
    // dispatch(fetchFilmsIfNeeded(selectedSubreddit))
  }

  render() {
    const { films, isFetching, lastUpdated } = this.props
    return (
      <div>
        <div className="card">
          <div className="card-content">
          {lastUpdated &&
            <h2>Films</h2>
          }
        {isFetching && films.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && films.length === 0 &&
          <h2>Empty.</h2>
        }
        {films.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <List items={films} toggleSelectedState={this.toggleSelectedState}/>
          </div>
        }
          </div>
        </div>
          
      </div>
    )
  }
}

Films.propTypes = {
  films: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  let stateData = {
    films: [],
    isFetching: true
  };

  if (state.movies.moviesList && 
      state.movies.moviesList.films &&
      state.movies.moviesList.films.length > 0) {
    debugger;
    stateData = state.movies.moviesList;
    stateData.films = stateData.films.map((f) => {
      f.isSelected = state.selectedFilms.some((item) => item === (f.id).toString());
      return f;
    });
  }

  return stateData;
}

export default connect(mapStateToProps)(Films)