/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import { handlerField } from '../../handlers';
import styles from './field.module.css';

export const FieldLayout = ({ state }) => (
	<div className={styles.btnGroup}>
		{state.field.map((cell, index) => (
			<button
				key={index}
				id={index}
				className={styles.btn}
				onClick={() => handlerField(state, index)}
			>
				{PLAYER_SIGN[cell]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
