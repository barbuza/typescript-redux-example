interface IReducer<T> {
    (state: T, action: IAction): T;
}

export default function createReducer<T>(initialState: T, handlers: {[type: string]: (state: T, action: IAction) => Object}): IReducer<T> {
    return function (state: T, action: IAction): T {
        if (typeof state === 'undefined') {
            return initialState;
        }
        if (!handlers[action.type]) {
            return state;
        }
        const result = handlers[action.type](state, action);
        if (typeof result === 'object' && result === null) {
            return state;
        }
        return Object.assign({}, state, result) as T;
    }
}
