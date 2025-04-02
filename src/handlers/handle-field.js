import { PLAYER, STATUS } from '../constants';
import { setCurrentPlayer, setField, setStatus } from '../store';
import { checkEmptyCell, checkWin } from '../utils';

export const handlerField = ( field, status, currentPlayer, index, dispatch) => {

	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[index] !== PLAYER.NOBODY
	)
		return;

	// обновляем игровое ПОЛЕ
	const newField = [...field];
	newField[index] = currentPlayer;
	dispatch(setField(newField));

	if (checkWin(newField, currentPlayer)) {
		dispatch(setStatus(STATUS.WIN));
	} else if (checkEmptyCell(newField)) {
		dispatch(setStatus(STATUS.DRAW));
	} else {
		const nextPlayer =
			currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
		dispatch(setCurrentPlayer(nextPlayer));
	}
};
