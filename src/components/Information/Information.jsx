/* eslint-disable react/prop-types */
//будет выводить, чей на данный момент ход (крестика или нолика), либо информацию о победе одной из сторон;
import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ checkWinner }) => {
	return (
		<>
			<div className={styles.dsc}>{checkWinner}</div>
		</>
	);
};

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {

	const winner = (
		<>
			Победа: <span> {currentPlayer}</span>
		</>
	);

	const toGoPlayer = (
		<>
			Ходит: <span>{currentPlayer}</span>
		</>
	);

	const isWinnerOrNot = isGameEnded ? winner : toGoPlayer;
	const checkWinner = isDraw ? 'Ничья' : isWinnerOrNot;

	return <InformationLayout {...{ checkWinner }} />;
};

Information.protoType = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
}