import PropTypes from 'prop-types';
import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { information } = this.props;

		return <div className="m-1.5 font-bold text-3xl relative">{information}</div>;
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
};
