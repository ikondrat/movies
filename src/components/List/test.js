import React from 'react';
import { shallow } from 'enzyme';
import List from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<List films={[
    {
      id: "test",
      isSelected: false,
      title: "test film title",
      description: "test film description",
      toggleSelectedState: function() {

      },
      previewImage: "https://www.google.com/x.gif"
    }
  ]}/>);
});