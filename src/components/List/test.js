import React from 'react';
import { shallow } from 'enzyme';
import List from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<List 
    toggleSelectedState={() => console.log('test')}
    films={[
    {
      id:1,
      isSelected: false,
      title: "test film title",
      description: "test film description",
      previewImage: "https://www.google.com/x.gif"
    }
  ]}/>);
});