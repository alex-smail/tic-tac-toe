/* eslint-disable react/prop-types */
// будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;
import { connect } from 'react-redux';
import {
	selectField,
	selectStatus,
	selectCurrentPlayer,
} from '../../selectors';
import { Component } from 'react';
import { FieldLayout } from './field-layout';

export class FieldContainer extends Component {
	render() {
		const { field, status, currentPlayer, dispatch } = this.props;

		return (
			<FieldLayout
				field={field}
				status={status}
				currentPlayer={currentPlayer}
				dispatch={dispatch}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);
