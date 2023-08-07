import React from 'react';
import './style.css';
import { useSelector, useDispatch } from './react-redux';

// using react redux
function App(props) {
  const { count } = useSelector();
  const dispatch = useDispatch();

  const add = () => dispatch({ type: 'add' });
  const subtract = () => dispatch({ type: 'sub' });

  return (
    <div>
      <h1>
        Count: {props.name} {count}
      </h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}

export default App;
