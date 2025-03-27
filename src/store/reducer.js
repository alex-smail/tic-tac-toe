import { PLAYER, STATUS } from '../constants';
import { createEmptyField } from '../utils';
import {
	RESTART_GAME,
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_STATUS,
} from './actions';

export const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const GameReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_STATUS:
			return { ...state, status: payload };
		case SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};
		case SET_FIELD:
			return {
				...state,
				field: payload,
			};
		case RESTART_GAME:
			return initialState;

		default:
			return state;
	}
};
