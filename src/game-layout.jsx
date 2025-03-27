/* eslint-disable react/prop-types */
import { Information, Field } from './components';
import styles from './game.module.css';
import { handleRestart } from './handlers';

export const GameLayout = ({ state }) => (
	<>
		<Information state={state} />
		<Field state={state} />

		<button className={styles.endGame} onClick={handleRestart}>
			Начать заново
		</button>
	</>
);
