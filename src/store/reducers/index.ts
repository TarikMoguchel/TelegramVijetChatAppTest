import {combineReducers} from 'redux';
import { messagesReducer } from './messagesReducer';

export const rootReducer = combineReducers({
    messages: messagesReducer,
})

export type RootState = ReturnType<typeof rootReducer>