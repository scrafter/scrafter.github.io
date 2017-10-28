import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './components/app/app.reducer';
import App from './components/app/app.component';

const store = createStore(
  appReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
