//будет выводить, чей на данный момент ход (крестика или нолика), либо информацию о победе одной из сторон;
import PropTypes from 'prop-types';
import { InformationLayout } from './information-layout';
import { PLAYER_ACTION, PLAYER_SIGN, STATUS } from '../../constants';
import { store } from '../../store';

export const Information = () => {
	const { status, currentPlayer } = store.getState();

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_SIGN[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};

Information.protoType = {
	currentPlayer: PropTypes.string,
	status: PropTypes.string,
};
