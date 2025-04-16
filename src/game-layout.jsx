import { Component } from 'react';
import { Information, Field } from './components';
import { handleRestart } from './handlers';

export class GameLayout extends Component {
	render() {
		const { dispatch } = this.props;

		return (
			<>
				<Information />
				<Field />

				<button
					className="mt-8 rounded-[6px] bg-[#1a1a1a] cursor-pointer p-3 border border-transparent hover:border-indigo-400"
					onClick={() => handleRestart(dispatch)}
				>
					Начать заново
				</button>
			</>
		);
	}
}
