import * as React from 'react';
import { connect } from 'react-redux';

import { BAR_ACTION } from './actionTypes';

interface IAppStore {
    storeFoo?: string;
}

interface IAppProps {
    propsFoo?: string;
}

interface IAppDispatch {
    dispatchBar?(): void;
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
        })
    };
}

export class App extends React.Component<IAppProps & IAppStore & IAppDispatch, {}> {

    render() {
        const { dispatchBar, propsFoo, storeFoo } = this.props;
        return (
            <dl>
                <dt>props</dt>
                <dd>{propsFoo}</dd>

                <dt>store</dt>
                <dd>{storeFoo}</dd>

                <button onClick={dispatchBar}>bar</button>
            </dl>
        );
    }

}

export default connect<IAppStore, IAppProps, IAppDispatch>(mapState, mapDispatch)(App);
