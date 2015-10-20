import {Reducer, Action} from 'redux';

export const RESET_STORE = Symbol('RESET_STORE');

export interface PartialReducer<T> {
  (state: T, action: Action): Object;
}

export default function createReducer<T>(initialState: T, handlers: {[type: string]: PartialReducer<T>}): Reducer<T> {
  return function (state: T, action: Action): T {
    if (typeof state === 'undefined') {
      return initialState;
    }
    if (typeof handlers[action.type] === 'function') {
      const result = handlers[action.type](state, action);
      if (typeof result === 'object' && result === null) {
        return state;
      } else if (result === RESET_STORE) {
        return initialState;
      }
      return Object.assign({}, state, result);
    }
    return state;
  }
}
