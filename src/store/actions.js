export const SET_STATUS = 'SET_STATUS';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_FIELD = 'SET_FIELD';
export const RESTART_GAME = 'RESTART_GAME';

export const setStatus = (status) => ({ type: SET_STATUS, payload: status });

export const setCurrentPlayer = (player) => ({
	type: SET_CURRENT_PLAYER,
	payload: player,
});

export const setField = (field) => ({ type: SET_FIELD, payload: field });

export const setRestartGame = () => ({ type: RESTART_GAME });
