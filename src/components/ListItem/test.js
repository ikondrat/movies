import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<ListItem 
    id={1}
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