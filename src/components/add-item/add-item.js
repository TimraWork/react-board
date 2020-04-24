import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
	render() {
		const { onAddItem } = this.props;
		return (
			<button
				className="btn btn-light mt-4"
				onClick={() => onAddItem('ТЕКСТ')}
			>
				Добавить элемент
			</button>
		);
	}
}
