import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

describe('Board', () => {
  it('should renders Board without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
