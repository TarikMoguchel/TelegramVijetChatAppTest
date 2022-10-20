import {combineReducers} from 'redux'
import {createStore,applyMiddleware} from 'redux'
import {messagesReducer} from './reducers/messagesReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))