export const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

export const loggerTwo = store => next => action => {
    console.group(action.type);
    console.info('dispatching (logger two)', action);
    let result = next(action);
    console.log('next state (logger two)', store.getState());
    console.groupEnd(action.type);
    return result;
};

