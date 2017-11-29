import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FavoriteAction from '../FavoriteAction/';
import Actor from '../Actor/';
import PropTypes from 'prop-types';

const styleImage = {
  "height": 400,
  "objectFit": "cover"
};

const CardExampleWithAvatar = ({
  title,
  releaseYear,
  category,
  previewImage,
  toggleSelectedState,
  description,
  stars,
  isSelected,
  filmId
}) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={
        <span>
          {title} ({releaseYear})
          <FavoriteAction 
            filmId={filmId}
            toggleSelectedState={() => toggleSelectedState(filmId)}
            isSelected={isSelected}
          />
        </span>
        
      } subtitle={category} />}
    >
      <img src={previewImage} alt="" style={styleImage}/>
    </CardMedia>
    
    <CardText>
      {description}
      <h3>Stars</h3>
      {stars && stars.map((star, i) => <Actor key={i} name={star}/>)}
    </CardText>
  </Card>
);


CardExampleWithAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  toggleSelectedState: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.array.isRequired,
  isSelected: PropTypes.bool.isRequired,
  filmId: PropTypes.string.isRequired
  
};


export default CardExampleWithAvatar;