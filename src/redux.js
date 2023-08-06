function redux() {
  function createStore(reducer) {
    let state = reducer(undefined, { type: 'REDUX_INITIAL' });
    const subscribers = [];

    function dispatch(action) {
      state = reducer(state, action);
      publish();
    }

    function publish() {
      subscribers.forEach((cb) => {
        if (typeof cb === 'function') {
          cb();
        }
      });
    }

    function subscribe(cb) {
      subscribers.push(cb);
      // here we are returning index
      return function () {
        subscribers[subscribers.length - 1] = null;
      };
    }

    function getValue() {
      return state;
    }

    publish();

    return { dispatch, subscribe, getValue };
  }
  return { createStore };
}
const methods = redux();

export const createStore = methods.createStore;
