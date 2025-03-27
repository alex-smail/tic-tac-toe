import { useState, useEffect } from 'react';
import { GameLayout } from './game-layout';
import { store } from './store';

const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return (
		<GameLayout state={state} />
	);
};

export default Game;
