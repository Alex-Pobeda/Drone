import React from 'react';
import ReactDOM from 'react-dom';
import Drone from './Drone';

describe('Drone', () => {
  it('should renders Drone without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Drone/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
