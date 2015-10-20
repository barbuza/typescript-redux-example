declare module Redux {

  interface Action {
    type: string;
  }

  interface Dispatchable extends Action {

  }

  interface Reducer<T> {

    (state: T, action: Action): T;

  }

  interface Dispatch {
    (action: Dispatchable): any;
  }

  interface Middleware {

    (storeMethods: StoreMethods): (next: Dispatch) => (action: Action) => any;

  }

  interface StoreMethods {

    dispatch: Dispatch;

    getState(): ReduxState;

  }

  interface Store extends StoreMethods {

    getReducer(): Reducer<ReduxState>;

    replaceReducer(nextReducer: Reducer<ReduxState>): void;

    subscribe(listener: Function): Function;

  }

  interface CreateStore {
    (reducer: Reducer<ReduxState>, initialState?: ReduxState): Store;
  }

  const createStore: CreateStore;

  function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;

  function combineReducers<T>(reducers: {[key: string]: Reducer<any>}): Reducer<T>;

  function applyMiddleware(...middlewares: Middleware[]): (storeCreator: CreateStore) => CreateStore;

  function compose<A, B>(fn1: (arg: A) => B): (arg: A) => B;

  function compose<A, B, C>(fn1: (arg: B) => C, fn2: (arg: A) => B): (arg: A) => C;

  function compose<A, B, C, D>(fn1: (arg: C) => D, fn2: (arg: B) => C, fn3: (arg: A) => B): (arg: A) => D;

  function compose<A, B, C, D, E>(fn1: (arg: D) => E, fn2: (arg: C) => D, fn3: (arg: B) => C, fn4: (arg: A) => B): (arg: A) => E;

  function compose<A, B, C, D, E, F>(fn1: (arg: E) => F, fn2: (arg: D) => E, fn3: (arg: C) => D, fn4: (arg: B) => C, fn5: (arg: A) => B): (arg: A) => F;

}

declare module 'redux' {
  export = Redux;
}
