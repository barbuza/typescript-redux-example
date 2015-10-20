import { createStore, combineReducers, applyMiddleware, Reducer, Action, Dispatch, StoreMethods } from 'redux';
import * as _ from 'lodash';

import createReducer, { RESET_STORE } from '../createReducer';
import { FOO_ACTION, BAR_ACTION, RESET_ACTION } from '../actionTypes';

import uiReducer from './ui';

const logger = (storeMethods: StoreMethods) => (next: Dispatch) => (action: Action) => {
  const payload = _.omit(action, 'type');
  if (!_.isEmpty(payload)) {
    console.info(`dispatch ${action.type}`, payload);
  } else {
    console.info(`dispatch ${action.type}`);
  }
  return next(action);
};

export const store = applyMiddleware(logger)(createStore)(combineReducers({ ui: uiReducer }) as Reducer<ReduxState>);
