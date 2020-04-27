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
			done: false,
			id: this.minArrIdx++,
		};
	}

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Lorem IPSUM'),
			this.createTodoItem('Blabla bla bla'),
			this.createTodoItem('KU KU KU KU'),
		],
		query: '',
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

	filterTodoData = () => {
		const findEl = this.state.todoData.filter(
			(el) =>
				el.label.toLowerCase().indexOf(this.state.query.toLowerCase()) >
				-1
		);
		return findEl;
	};

	onFilter = (jopa) => {
		this.setState({
			query: jopa,
		});
	};

	render() {
		const { todoData } = this.state;

		const doneCount = todoData.filter((el) => el.done).length;
		const toDoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={toDoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onFilter={this.onFilter} />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={this.filterTodoData()} // результат функции
					onDeleted={this.onDeleteItem} // тело функции
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}
				/>
				<AddItem onAddItem={this.onAddItem} />
			</div>
		);
	}
}
