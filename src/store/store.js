import { legacy_createStore as createStore } from 'redux'
import { GameReducer } from './reducer';

export const store = createStore(GameReducer);
