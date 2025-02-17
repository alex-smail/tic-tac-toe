/* eslint-disable react/prop-types */
// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;

import { FieldLayout } from './field-layout';
import PropTypes from 'prop-types';

export const Field = ({ field, handlerField}) => {
	return <FieldLayout {...{ field, handlerField }} />;
};

Field.protoType = {
	field: PropTypes.string,
	handlerField: PropTypes.func,
};
