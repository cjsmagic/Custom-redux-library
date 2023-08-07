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

const store = createStore(myReducer);

export default store;
