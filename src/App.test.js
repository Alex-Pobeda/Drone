import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should reduce fuel value by one', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const component = mount(<App />);
    map.keydown({ key: 'ArrowLeft' });
    expect(component.state('fuel')).toBe(99);
    component.unmount();
  });
});
