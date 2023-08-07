import React, { useState, useEffect, createContext, useContext } from 'react';


const Context = createContext();

function Provider({store,children}){
  return <Context.Provider value={store}>{children}</Context.Provider>

}

function connect(Component, mapPropsToState, dispatchConsumers) {

  return function wrapperComponent(defaultProps={}){
    const store = useContext(Context);
    const [mappedProps,setMappedProps] = useState(()=>({...mapPropsToState(store.getValue()),...dispatchConsumers(store.dispatch)}))

    useEffect(()=>{
      const unsubscribe = store.subscribe(()=>{
        setMappedProps({...mapPropsToState(store.getValue()),...dispatchConsumers(store.dispatch)})
      })

      return ()=>{
        unsubscribe();
      }
    },[])

    return <Component {...defaultProps,mappedProps}/>
  }

}


export { Provider,connect };
