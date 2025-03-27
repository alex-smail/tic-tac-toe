/* eslint-disable react/prop-types */
// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;
import { FieldLayout } from './field-layout';

export const Field = ({ state }) => {
	return <FieldLayout state={state} />;
};
