import React, { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext();

function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

function connect(Component, mapPropsToState, dispatchConsumers) {
  return function wrapperComponent(defaultProps = {}) {
    const store = useContext(Context);

    const getProps = () => {
      return {
        ...mapPropsToState(store.getValue()),
        ...dispatchConsumers(store.dispatch),
      };
    };

    const [mappedProps, setMappedProps] = useState(() => getProps());

    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setMappedProps(getProps());
      });

      return () => {
        unsubscribe();
      };
    }, []);

    return <Component {...{ ...defaultProps, ...mappedProps }} />;
  };
}

export { Provider, connect };
