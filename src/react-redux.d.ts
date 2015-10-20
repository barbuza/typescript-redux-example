declare module 'react-redux' {

  import { Store, Dispatch } from 'redux';

  import { ComponentClass, Component } from 'react';

  interface ConnectDecorator<S, P, D> {
    (component: ComponentClass<S & P & D>): ComponentClass<P>;
  }

  interface MapState<S, P> {
    (state: ReduxState, props?: P): S;
  }

  interface MapDispatch<D, P> {
    (dispatch: Dispatch, props?: P): D;
  }

  export function connect<S, P, D>(mapState?: MapState<S, P>, mapDispatch?: MapDispatch<D, P>): ConnectDecorator<S, P, D>;

  export interface ProviderProps {
    store: Store;
  }

  export class Provider extends Component<ProviderProps, {}> {

  }

}
