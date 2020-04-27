import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		searchLabel: '',
	};

	onLabelChange = (e) => {
		this.setState({
			searchLabel: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			searchLabel: '',
		});
		this.props.onFilter(this.state.searchLabel);
	};

	render() {
		// const { onFilter } = this.props;
		return (
			<form action="#" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control search-input"
					placeholder="type to search"
					onChange={this.onLabelChange}
					value={this.state.searchLabel}
				/>
			</form>
		);
	}
}
