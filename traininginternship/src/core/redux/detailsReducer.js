const intitialState = {
    trainings: []
};

export const detailsReducer = (state = intitialState, action) => {
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
