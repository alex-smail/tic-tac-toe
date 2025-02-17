import { useState } from 'react';
import { GameLayout } from './game-layout';
import { handlerField, handleRestart } from './handlers';
import { createEmptyField } from './utils';

const Game = () => {
	//кто ходит в данный момент, значениями может быть 'X' или '0'
	const [currentPlayer, setCurrentPlayer] = useState('X');
	//была ли завершена игра
	const [isGameEnded, setIsGameEnded] = useState(false);
	//была ли ничья
	const [isDraw, setIsDraw] = useState(false);
	//массив клеток игрового поля, состоящий из 9 пустых строк (3x3)
	const [field, setField] = useState(createEmptyField());

	const gameState = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
	};

	return (
		<GameLayout
			gameState={gameState}
			handleRestart={() => handleRestart(gameState)}
			handlerField={(index) => handlerField(gameState, index)}
		/>
	);
};

export default Game;
