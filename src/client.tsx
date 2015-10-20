import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';

import { store } from './reducers';
import { FOO_ACTION } from './actionTypes';
import App from './App';

store.dispatch({
    type: FOO_ACTION
});

console.log(ReactDOM.renderToStaticMarkup(
    <Provider store={store}>
        <App propsFoo='props'/>
    </Provider>
));
