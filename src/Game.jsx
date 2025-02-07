/* eslint-disable react/prop-types */
import styles from './game.module.css';
import { Field, Information } from './components';
import { useState } from 'react';

const GameLayout = ({ gameState, resetGame }) => {
	return (
		<>
			<Information {...gameState} />
			<Field {...gameState} />
			<button
				className={styles.endGame}
				onClick={() => {
					resetGame();
				}}
			>
				Начать заново
			</button>
		</>
	);
};

const Game = () => {
	//кто ходит в данный момент, значениями может быть 'X' или '0'
	const [currentPlayer, setCurrentPlayer] = useState('X');
	//была ли завершена игра
	const [isGameEnded, setIsGameEnded] = useState(false);
	//была ли ничья
	const [isDraw, setIsDraw] = useState(false);
	//массив клеток игрового поля, состоящий из 9 пустых строк (3x3)
	const [field, setField] = useState(Array(9).fill(''));

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

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return <GameLayout gameState={gameState} resetGame={resetGame} />;
};

export default Game;
