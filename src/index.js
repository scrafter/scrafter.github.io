import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/app.component';
import '../node_modules/alertify.js/dist/css/alertify.css';
import './index.scss';

const store = createStore(
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