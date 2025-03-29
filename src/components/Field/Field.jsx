// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;
import { store } from '../../store';
import { FieldLayout } from './field-layout';

export const Field = () => {
	const { field, status, currentPlayer } = store.getState();
	return <FieldLayout  field={field} status={status} currentPlayer={currentPlayer}/>;
};
