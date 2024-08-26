import {applyMiddleware, createStore} from 'redux';
import { rootReducer } from '../reducer/rootReducer';
import { thunk } from 'redux-thunk';

//1- create store 
//hint: we use middleware because we use async and await or api
export const store = createStore(rootReducer,applyMiddleware(thunk));