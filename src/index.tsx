import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import domready from 'domready';

import { store } from './reducers/index';
import App from './App';

domready(() => {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(
    <Provider store={store}>
      <App propsFoo='props'/>
    </Provider>,
    root
  );
});
