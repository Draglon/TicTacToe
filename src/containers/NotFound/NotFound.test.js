import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './index';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<NotFound />, section);
  ReactDOM.unmountComponentAtNode(section);
});
