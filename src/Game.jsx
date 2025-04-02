import { useDispatch } from 'react-redux';
import { GameLayout } from './game-layout';

const Game = () => {
	const dispatch = useDispatch();

	return <GameLayout dispatch={dispatch}/>;
};

export default Game;
