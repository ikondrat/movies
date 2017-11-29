import React from 'react';
import { shallow } from 'enzyme';
import Actor from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<Actor 
    name='George'
  />);
});

it('renders correct actore', () => {
  expect(shallow(<Actor 
    name="George"
  />).contains(
    <div>George</div>
  )).toEqual(true);
});