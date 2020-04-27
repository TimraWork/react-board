import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
	render() {
		return (
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-info"
					onClick={() => this.props.onFilter('all')}
				>
					All
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary"
					onClick={() => this.props.onFilter(false)}
				>
					Active
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary"
					onClick={() => this.props.onFilter(true)}
				>
					Done
				</button>
			</div>
		);
	}
}
