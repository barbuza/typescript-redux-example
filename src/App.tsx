import * as React from 'react';
import { connect } from 'react-redux';

import { BAR_ACTION, FOO_ACTION, RESET_ACTION } from './actionTypes';

interface IAppStore {
  storeFoo?: string;
}

interface IAppProps {
  propsFoo?: string;
}

interface IAppDispatch {
  dispatchBar?(): void;
  dispatchFoo?(): void;
  dispatchReset?(): void;
}

function mapState(state: ReduxState): IAppStore {
  return {
    storeFoo: state.ui.value
  };
}

function mapDispatch(dispatch: Redux.Dispatch): IAppDispatch {
  return {
    dispatchBar: () => dispatch({
      type: BAR_ACTION
    }),

    dispatchFoo: () => dispatch({
      type: FOO_ACTION,
      payload: 'foo'
    } as Redux.Action),

    dispatchReset: () => dispatch({
      type: RESET_ACTION
    })
  };
}

export class App extends React.Component<IAppProps & IAppStore & IAppDispatch, {}> {

  render() {
    const { dispatchBar, dispatchFoo, dispatchReset, propsFoo, storeFoo } = this.props;
    return (
      <div>
        <dl>
          <dt>props</dt>
          <dd>{propsFoo}</dd>

          <dt>store</dt>
          <dd>{storeFoo}</dd>
        </dl>

        <div>
          <button onClick={dispatchFoo}>foo</button>
          <button onClick={dispatchBar}>bar</button>
          <button onClick={dispatchReset}>reset</button>
        </div>
      </div>
    );
  }

}

export default connect<IAppStore, IAppProps, IAppDispatch>(mapState, mapDispatch)(App);
