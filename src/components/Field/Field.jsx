// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;
import { useSelector, useDispatch } from 'react-redux';
import {
	selectField,
	selectStatus,
	selectCurrentPlayer,
} from '../../selectors';
import { FieldLayout } from './field-layout';

export const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);

	return (
		<FieldLayout
			field={field}
			status={status}
			currentPlayer={currentPlayer}
			dispatch={dispatch}
		/>
	);
};
