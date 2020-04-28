import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item';

import './app.css';

export default class App extends Component {
	minArrIdx = 4;

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: true,
			id: this.minArrIdx++,
		};
	}

	state = {
		todoData: [
			{ label: 'NOT DONE1', important: false, done: false, id: 1 },
			{ label: 'NOT DONE2', important: false, done: false, id: 2 },
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Lorem IPSUM'),
			this.createTodoItem('Blabla bla bla'),
			this.createTodoItem('KU KU KU KU'),
		],
		query: '',
		filter: 'all', // all, done, active
	};

	toggle(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx]; // найдем элемент по индексу
		const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // Изменим свойство

		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			// 3. Set new object to state
			return {
				todoData: this.toggle(todoData, id, 'important'),
			};
		});
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			// 3. Set new object to state
			return {
				todoData: this.toggle(todoData, id, 'done'),
			};
		});
	};

	onAddItem = (text) => {
		const newItem = {
			label: text,
			important: false,
			id: this.minArrIdx++,
		};
		// this.createTodoItem('Drink Coffee'),
		this.setState(({ todoData }) => {
			const newArr = [...todoData, newItem];
			return {
				todoData: newArr,
			};
		});
	};

	onDeleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((c) => c.id === id);
			const newArr = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1),
			];
			return {
				todoData: newArr,
			};
		});
	};

	onSearchQuery = (jopa) => {
		this.setState({
			query: jopa,
		});
	};

	searchTodoData = () => {
		const data = this.state.todoData;
		const search_text = this.state.query;
		return data.filter(
			(el) =>
				el.label.toLowerCase().indexOf(search_text.toLowerCase()) > -1
		);
	};

	onFilter = (filter_text) => {
		this.setState({
			filter: filter_text,
		});
	};

	filterTodoData = (items) => {
		// const data = items;
		// const filter_text = this.state.filter;
		// if (filter_text === 'all') {
		// 	return items;
		// } else {
		// 	return data.filter((el) => el.done === filter_text);
		// }

		switch (this.state.filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	};

	render() {
		const doneCount = this.searchTodoData().filter((el) => el.done).length;
		const toDoCount = this.searchTodoData().length - doneCount;

		const doneEl = this.searchTodoData();
		console.log(doneEl);
		return (
			<div className="todo-app">
				<AppHeader toDo={toDoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchQuery={this.onSearchQuery} />
					<ItemStatusFilter onFilter={this.onFilter} />
				</div>
				<TodoList
					todos={this.filterTodoData(doneEl)} // результат функции
					onDeleted={this.onDeleteItem} // тело функции
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}
				/>
				<AddItem onAddItem={this.onAddItem} />
			</div>
		);
	}
}
