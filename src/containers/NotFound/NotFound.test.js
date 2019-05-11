import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';

describe('Not-Found container', () => {
  it('renders without crashing', () => {
    const NotFoundContainer = shallow(<NotFound />);
    expect(NotFoundContainer.find('h2').text()).toEqual('Page not found');
    expect(NotFoundContainer.find('h1').text()).toEqual('404');
  });
});
