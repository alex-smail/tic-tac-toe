import { Information, Field } from './components';
import styles from './game.module.css';
import { handleRestart } from './handlers';

export const GameLayout = ({ dispatch }) => (
	<>
		<Information />
		<Field />

		<button
			className={styles.endGame}
			onClick={() => handleRestart(dispatch)}
		>
			Начать заново
		</button>
	</>
);
