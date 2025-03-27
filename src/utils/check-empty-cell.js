import { PLAYER } from '../constants';

export const checkEmptyCell = (field) =>
	field.every((cellPlayer) => cellPlayer === PLAYER.NOBODY);
