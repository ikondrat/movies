import React from 'react';
import {GridTile} from 'material-ui/GridList';
import FavoriteAction from '../FavoriteAction/';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

const ListItem = ({
  id,
  title,
  toggleSelectedState,
  description,
  isSelected,
  previewImage
}) => (
  <GridTile
    title={<Link className="link" to={`/movies/${id}`}>{title}</Link>}
    subtitle={<Link className="link" to={`/movies/${id}`}><span>{description}</span></Link>}
    actionIcon={<FavoriteAction 
      filmId={id}
      toggleSelectedState={() => toggleSelectedState(id)}
      isSelected={isSelected}
    />}
>
  <img src={previewImage} alt={title}/>
</GridTile>
)

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  toggleSelectedState: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired
};

export default ListItem;