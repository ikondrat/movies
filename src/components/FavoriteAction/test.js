import React from 'react';
import { shallow } from 'enzyme';
import FavoriteAction from './';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<FavoriteAction 
    filmId={1}
    toggleSelectedState={() => console.log('toggle selection')}
    isSelected={false}
  />);
});

it('renders action with correct states', () => {
  expect(shallow(<FavoriteAction 
    filmId={1}
    toggleSelectedState={() => console.log('toggle selection')}
    isSelected={true}
  />).contains(
    <Star color="white" />
  )).toEqual(true);

  expect(shallow(<FavoriteAction 
    filmId={2} 
    toggleSelectedState={() => console.log('toggle selection')}
    isSelected={false}
  />).contains(
    <StarBorder color="white" />
  )).toEqual(true);
});