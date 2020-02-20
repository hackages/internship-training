import React from 'react';

export const Store = React.createContext(undefined);

const initialState = {
    trainings: []
};

export const detailsReducer = (state = initialState, action) => {
    if (action.type === 'SET_TRAININGS') {
        return {
            trainings: action.payload
        };

    } else if (action.type === 'ADD_TRAINING') {

        if (state.trainings.find(e => e.id === action.payload.id)) { // pour les doublons ( children HOME -> DETAILS -> HOME
            return {
                trainings: state.trainings
            };
        }
        else {
            return {
                trainings: [...state.trainings, action.payload]
            };
        }
    }
    return state;
};

export function StoreProvider(props) {

    const [state, dispatch] = React.useReducer(detailsReducer, initialState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}