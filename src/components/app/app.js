import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

export default class App extends Component {
	state = {
		todoData: [
			{ label: 'Drink Coffee', important: false, id: 1 },
			{ label: 'Make Awesome App', important: false, id: 2 },
			{ label: 'Have a lunch', important: false, id: 3 },
		],
	};

	// deleteItem = (id) => {
	// 	console.log(id);
	// };

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={this.state.todoData}
					onDeleted={(id) => console.log('del', id)}
				/>
			</div>
		);
	}
}
