import { createStore, combineReducers } from 'redux';

import createReducer from './createReducer';
import { FOO_ACTION, BAR_ACTION } from './actionTypes';

const uiStateInitial = {
    value: 'initial'
};

const uiReducer = createReducer<UIReducerState>(uiStateInitial, {
    [FOO_ACTION]: () => ({ value: 'foo' }),
    [BAR_ACTION]: () => ({ value: 'bar' })
});

export const store = createStore(combineReducers({ ui: uiReducer }));
