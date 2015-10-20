declare interface UIReducerState {
    value: string;
}

declare interface ReduxState {
    ui: UIReducerState;
}

declare interface IAction {
    type: string;
}
