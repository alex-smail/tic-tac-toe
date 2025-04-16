import { Component } from 'react';
import { GameLayout } from './game-layout';
import { connect } from 'react-redux';

export class GameContainer extends Component {
	render() {
		const { dispatch } = this.props;

		return <GameLayout dispatch={dispatch} />;
	}
}

const Game = connect()(GameContainer);

export default Game;
