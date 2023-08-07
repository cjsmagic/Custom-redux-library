import React from 'react';
import './style.css';
import { connect } from './react-redux';

// using react redux
function App(props) {
  return (
    <div>
      <h1>
        Count: {props.name} {props.count}
      </h1>
      <button onClick={props.add}>Add</button>
      <button onClick={props.subtract}>Subtract</button>
    </div>
  );
}

const WithConnect = connect(
  App,
  (value) => {
    return { count: value.count };
  },
  (dispatch) => {
    return {
      add: () => dispatch({ type: 'add' }),
      subtract: () => dispatch({ type: 'sub' }),
    };
  }
);

export default WithConnect;
