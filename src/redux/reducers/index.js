import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { gameChangerReducer } from './gameChanger';

export const reducer = combineReducers({
	counter: counterReducer,
	game: gameChangerReducer,
});
