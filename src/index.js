import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import App2 from './without-react-redux';
import App3 from './with-hooks';

import store from './store';
import { Provider } from './react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <div>without react support utilities</div>
      <App2 name="clarence" />
      <br />
      <hr />
      <div>with react support utility HOC : connect</div>
      <App name="clarence" />
      <br />
      <hr />
      <div>with react support utility hooks : useSelector, useDispatcher</div>

      <App3 name="clarence" />
    </Provider>
  </StrictMode>
);
