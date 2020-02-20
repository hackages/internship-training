import { SET_TRAININGS, ADD_TRAINING } from "./action";

const intitialState = {
    trainings: []
};

const reducer = {
    [SET_TRAININGS](state, action) {
        return {
            ...state,
            trainings: action.payload
        };
    },

    [ADD_TRAINING](state, action) {
        return{
            ...state,
            trainings: [...state.trainings, action.payload]
        };
    }
}





export const detailsReducer = (state = intitialState, action) => {
    const handler =  reducer[action.type]
   
    return handler? handler(state, action): state;
};
