import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { createStore } from './redux';

const initialState = {
  count: 0,
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };

    case 'sub':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

// const store = createStore(myReducer);

// store.subscribe(() => {
//   console.log(store.getValue());
// });

// console.log(store.getValue());

// store.dispatch({ type: 'add' });

// console.log(store.getValue());

// store.dispatch({ type: 'sub' });

// console.log(store.getValue());

// store.dispatch({ type: 'add' });

export default function App() {
  const [value, setValue] = useState(0);

  const store = useRef(null);

  useEffect(() => {
    store.current = createStore(myReducer);

    const unsubscribe = store.current.subscribe(() => {
      const { count } = store.current.getValue();
      console.log({ count });
      setValue(count);

      if (count === 11) {
        unsubscribe();
      }
    });
  }, []);

  const add = () => {
    store.current.dispatch({ type: 'add' });
  };

  const subtract = () => {
    store.current.dispatch({ type: 'sub' });
  };

  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}
