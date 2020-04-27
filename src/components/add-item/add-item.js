import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
	state = {
		label: '',
	};

	onLabelChange = (e) => {
		// console.log(e.target.value);
		this.setState({
			label: e.target.value.toUpperCase(),
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			label: '',
		});
		this.props.onAddItem(this.state.label);
	};

	render() {
		// const { onAddItem } = this.props;
		return (
			<form className="addElement d-flex mt-3" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control  mr-2"
					placeholder="Add element"
					onChange={this.onLabelChange}
					value={this.state.label}
				/>
				<button
					className="btn btn-secondary"
					// onClick={() => onAddItem(this.state.label)}
				>
					Add
				</button>
			</form> /* addElement */
		);
	}
}
