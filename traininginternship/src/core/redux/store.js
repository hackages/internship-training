import React from 'react';

export const Store = React.createContext();

const initialState = {
    trainings: []
};

export const detailsReducer = (state = initialState, action) => {
    if (action.type === 'SET_TRAININGS') {
        return{
            trainings: action.payload
        };
        
    } else if (action.type === 'ADD_TRAINING') {
        return{
            trainings: [...state.trainings, action.payload]
        };
    }

    return state;
};

export function StoreProvider(props) {

    const [state, dispatch] = React.useReducer(detailsReducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}