import { Information, Field } from './components';
import styles from './game.module.css';
import { handleRestart } from './handlers';

export const GameLayout = () => (
	<>
		<Information />
		<Field />

		<button className={styles.endGame} onClick={handleRestart}>
			Начать заново
		</button>
	</>
);
