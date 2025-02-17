import { WIN_PATTERNS } from '../constants'

export const handlerField = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}, index) => {
	if (isGameEnded || field[index] !== '') return;

	// обновляем игровое ПОЛЕ
	const newField = [...field];
	newField[index] = currentPlayer;
	setField(newField);

	// проверяем есть ли ПОБЕДИТЕЛЬ
	const isWinner = WIN_PATTERNS.some((arr) =>
		arr.every((cell) => newField[cell] === currentPlayer)
	);

	if (isWinner) {
		setIsGameEnded(true);
		return;
	}

	// проверяем на НИЧЬЮ
	const eachFieldTrue = newField.every(
		(currentCell) => currentCell !== ''
	);
	if (eachFieldTrue) setIsDraw(true);

	setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
};