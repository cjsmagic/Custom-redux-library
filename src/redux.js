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
      return function () {
        // we can use better ways to remove cb elements
        subscribers[subscribers.length - 1] = null;
      };
    }

    function getValue() {
      return JSON.parse(JSON.stringify(state));
    }

    publish();

    return { dispatch, subscribe, getValue };
  }
  return { createStore };
}
const methods = redux();

export const createStore = methods.createStore;
