import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedHome, { Home } from './index';

describe('<Home /> container', () => {
  const mockStore = configureStore();
  const initialState = {};
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedHome store={store} />);
  });

  it('render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('render property', () => {
    expect(container).toMatchSnapshot();
  });
});
