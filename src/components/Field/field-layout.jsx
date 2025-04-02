/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import { handlerField } from '../../handlers';
import styles from './field.module.css';

export const FieldLayout = ({ field, status, currentPlayer, dispatch }) => (
	<div className={styles.btnGroup}>
		{field.map((cell, index) => (
			<button
				key={index}
				id={index}
				className={styles.btn}
				onClick={() =>
					handlerField(field, status, currentPlayer, index, dispatch)
				}
			>
				{PLAYER_SIGN[cell]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
	),
	handleCellClick: PropTypes.func,
};
