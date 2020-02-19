import { combineReducers, createStore } from 'redux';
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({
    details: detailsReducer
});

export const store = createStore(rootReducer);