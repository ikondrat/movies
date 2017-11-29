import React from 'react';
import { shallow } from 'enzyme';
import Film from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<Film 
    filmId="testId"
    title="test title"
    releaseYear="2012"
    category="comedy"
    previewImage="https://yandex.ru/x.gif"
    toggleSelectedState={() => console.log('toggle selection')}
    description="Test film description"
    stars={["Tom Hanks", 'Kianu Reaves']}
    isSelected={false}
  />);
});

/*
it('renders Film', () => {
  const wrapper = shallow(<Film />);
  const title = <h2>Home</h2>;
  expect(wrapper.contains(title)).toEqual(true);
});
*/