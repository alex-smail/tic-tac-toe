//будет выводить, чей на данный момент ход (крестика или нолика), либо информацию о победе одной из сторон;
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectStatus, selectCurrentPlayer } from '../../selectors';
import { InformationLayout } from './information-layout';
import { PLAYER_ACTION, PLAYER_SIGN, STATUS } from '../../constants';

export class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;

		const playerAction = PLAYER_ACTION[status];
		const playerName = PLAYER_SIGN[currentPlayer];

		const information =
			status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

		return <InformationLayout information={information} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);

Information.propTypes = {
	currentPlayer: PropTypes.string,
	status: PropTypes.string,
};
