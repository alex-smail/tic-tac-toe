import { setRestartGame, store } from '../store';

export const handleRestart = () => store.dispatch(setRestartGame());
