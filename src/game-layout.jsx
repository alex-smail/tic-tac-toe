/* eslint-disable react/prop-types */
import { Information, Field } from './components';
import styles from './game.module.css';

export const GameLayout = ({ gameState, handleRestart, handlerField }) => {
	return (
		<>
			<Information {...gameState} />
			<Field {...gameState} handlerField={handlerField} />
			<button className={styles.endGame} onClick={handleRestart}>
				Начать заново
			</button>
		</>
	);
};
