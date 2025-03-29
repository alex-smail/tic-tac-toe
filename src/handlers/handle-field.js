import { PLAYER, STATUS } from '../constants';
import { setCurrentPlayer, setField, setStatus, store } from '../store';
import { checkEmptyCell, checkWin } from '../utils';

export const handlerField = ( field, status, currentPlayer, index) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[index] !== PLAYER.NOBODY
	)
		return;

	// обновляем игровое ПОЛЕ
	const newField = [...field];
	newField[index] = currentPlayer;
	store.dispatch(setField(newField));

	if (checkWin(newField, currentPlayer)) {
		store.dispatch(setStatus(STATUS.WIN));
	} else if (checkEmptyCell(newField)) {
		store.dispatch(setStatus(STATUS.DRAW));
	} else {
		const nextPlayer =
			currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
		store.dispatch(setCurrentPlayer(nextPlayer));
	}
};
