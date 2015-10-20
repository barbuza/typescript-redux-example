import createReducer, { RESET_STORE } from '../createReducer';
import { FOO_ACTION, BAR_ACTION, RESET_ACTION } from '../actionTypes';

const initial = {
  value: 'initial'
};

export default  createReducer<UIReducerState>(initial, {
  [FOO_ACTION]: () => ({ value: 'foo' }),
  [BAR_ACTION]: () => ({ value: 'bar' }),
  [RESET_ACTION]: () => RESET_STORE
});
