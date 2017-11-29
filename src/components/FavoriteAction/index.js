import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';

import PropTypes from 'prop-types';

const FavoriteAction = ({toggleSelectedState, filmId, isSelected}) => {
  return <IconButton onClick={() => toggleSelectedState()}>
  {isSelected ? <Star color="white" /> : <StarBorder color="white" />}
</IconButton>
};

FavoriteAction.propTypes = {
  filmId: PropTypes.string.isRequired,
  toggleSelectedState: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};


export default FavoriteAction;