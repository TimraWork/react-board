import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
	buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' },
	];

	render() {
		const { filtered } = this.props;
		// console.log('filtered = ', items);

		const elements = this.buttons.map((el) => {
			const clazzs =
				filtered === el.name ? 'btn-info' : 'btn-outline-secondary';

			return (
				<button
					type="button"
					className={`btn ${clazzs}`}
					key={el.name}
					onClick={() => this.props.onFilter(el.name)}
				>
					{el.label}
				</button>
			);
		});

		return <div className="btn-group">{elements}</div>;
	}
}
