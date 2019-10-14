import React, {Component} from 'react';
import './App.css';
import Drone from './Drone';
import Board from './Board';

class App extends Component {
  state = {
    x: 0,
    y: 0,
    fuel: 100
  };

  handleKeyEvent = e => {
    const drone = document.querySelector('.drone');
    let styles = getComputedStyle(drone);
    let left = styles.left;
    let top = styles.top;
    if (this.state.fuel > 0) {
      switch (e.key) {
        case 'ArrowLeft':
          if (left !== '-320px') {
            drone.style.left = `${parseInt(left) - 10}px`;
            this.setState(state => ({
              x: state.x - 1,
              fuel: state.fuel - 1,
            }));
          }
          break;

        case 'ArrowUp':
          if (top !== '-280px') {
            drone.style.top = `${parseInt(top) - 10}px`;
            this.setState(state => ({
              y: state.y + 1,
              fuel: state.fuel - 1,
            }));
          }
          break;

        case 'ArrowRight':
          if (left !== '320px') {
            drone.style.left = `${parseInt(left) + 10}px`;
            this.setState(state => ({
              x: state.x + 1,
              fuel: state.fuel - 1,
            }));
          }
          break;

        case 'ArrowDown':
          if (top !== '280px') {
            drone.style.top = `${parseInt(top) + 10}px`;
            this.setState(state => ({
              y: state.y - 1,
              fuel: state.fuel - 1,
            }));
          }
            break;
        default:
          return this.state;
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyEvent);
  }

  render() {
    return (
      <div className="App">
        <Board {...this.state} />
        <Drone />
      </div>
    );
  }
}

export default App;
