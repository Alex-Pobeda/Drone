import React from 'react';

const Board = (props) => {
  return (
    <div className="board">
      <p>The current position is ({props.x}, {props.y})</p>
      <p>Current fuel amount is: {props.fuel}%</p>
    </div>
  );
};

export default Board;
