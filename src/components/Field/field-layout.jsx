/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import { handlerField } from '../../handlers';

import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		const { field, status, currentPlayer, dispatch } = this.props;

		return (
			<div className="flex flex-wrap w-80">
				{field.map((cell, index) => (
					<button
						key={index}
						id={index}
						className="font-bold text-3xl h-26 w-26 border border-[rgb(90,89,88)]  hover:border-indigo-400 bg-[#1a1a1a] cursor-pointer"
						onClick={() =>
							handlerField(
								field,
								status,
								currentPlayer,
								index,
								dispatch
							)
						}
					>
						{PLAYER_SIGN[cell]}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
	),
	handleCellClick: PropTypes.func,
};
