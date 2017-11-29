import React from 'react';
import {GridList} from 'material-ui/GridList';
import ListItem from '../ListItem/';
import PropTypes from 'prop-types';
import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const List = ({films, toggleSelectedState}) => (
  <div style={styles}>
    <GridList
      cellHeight={180}
      style={styles.gridList}>
        {films.map((film, i) => (
          <ListItem 
            {...film}
            toggleSelectedState={toggleSelectedState}
            key={i}
          />
        ))}
    </GridList>
  </div>
)
List.propTypes = {
  films: PropTypes.array.isRequired,
  toggleSelectedState: PropTypes.func.isRequired
};

export default List;