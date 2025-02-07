/* eslint-disable react/prop-types */
// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;
import styles from './field.module.css';

const FieldLayout = ({ field, handlerField }) => {
	return (
		<>
			<div className={styles.btnGroup}>
				{field.map((cell, index) => (
					<button
						key={index}
						id={index}
						className={styles.btn}
						onClick={() => {
							handlerField(index);
						}}
					>
						{cell}
					</button>
				))}
			</div>
		</>
	);
};

export const Field = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const handlerField = (index) => {
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

	return <FieldLayout {...{ field, handlerField }} />;
};
