import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import {GridList, GridTile} from 'material-ui/GridList';
import './style.css';
import {
  Link
} from 'react-router-dom';

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
export default ({items, toggleSelectedState}) => (
  <div style={styles}>
    <GridList
    cellHeight={180}
    style={styles.gridList}>
    {items.map((element, i) => (
      <GridTile
        key={element.id}
        title={<Link className="link" to={`/movies/${element.id}`}>{element.title}</Link>}
        subtitle={<Link className="link" to={`/movies/${element.id}`}><span>{element.description}</span></Link>}
        actionIcon={<IconButton onClick={() => toggleSelectedState(element.id)}>
          {element.isSelected ? <Star color="white" /> : <StarBorder color="white" />}
        </IconButton>}
      >
        <img src={element.previewImage} alt={element.title}/>
      </GridTile>
    ))}
  </GridList>
  </div>
)