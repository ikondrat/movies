import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import IconButton from 'material-ui/IconButton';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const FavoriteAction = ({toggleSelectedState, film}) => {
  return <IconButton onClick={() => toggleSelectedState(film.id)}>
  {film.isSelected ? <Star color="white" /> : <StarBorder color="white" />}
</IconButton>
}

const styleImage = {
  "height": 400,
  "objectFit": "cover"
};


const CardExampleWithAvatar = ({film, toggleSelectedState}) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={
        <span>{film.title} ({film.releaseYear})<FavoriteAction film={film} toggleSelectedState={toggleSelectedState}/></span>
        
      } subtitle={film.category} />}
    >
      <img src={film.previewImage} alt="" style={styleImage}/>
    </CardMedia>
    
    <CardText>
      {film.description}
      <h3>Stars</h3>
      {film.stars && film.stars.map((star, i) => <div key={i}>{star}</div>)}
    </CardText>
  </Card>
);



export default CardExampleWithAvatar;