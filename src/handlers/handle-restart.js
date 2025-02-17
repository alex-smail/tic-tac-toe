import { createEmptyField } from '../utils';

export const handleRestart = ({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
}) => {
	setCurrentPlayer('X');
	setIsGameEnded(false);
	setIsDraw(false);
	setField(createEmptyField());
};
