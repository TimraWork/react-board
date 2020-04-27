import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	// state = {
	// 	searchLabel: '',
	// };

	// onLabelChange = (e) => {
	// 	this.setState({
	// 		searchLabel: e.target.value,
	// 	});
	// 	this.props.onFilter(this.state.searchLabel);
	// };
	render() {
		// const { onFilter } = this.props;
		return (
			<form action="#">
				<input
					type="text"
					className="form-control search-input"
					placeholder="type to search"
					onChange={(e) => this.props.onFilter(e.target.value.trim())}
					// value={this.state.searchLabel}
				/>
			</form>
		);
	}
}
