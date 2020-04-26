import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item';

import './app.css';

export default class App extends Component {
	minArrIdx = 4;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Make Awesome App'),
		],
	};

	toggle(arr, id, propName) {
		// Нам нельзя изменять существующий стейт todoData
		// console.log(todoData);
		// по id находим индекс элемента
		const idx = arr.findIndex((el) => el.id === id);
		// console.log(idx);

		// 1. Update object
		const oldItem = arr[idx]; // найдем элемент по индексу
		const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // Изменим свойство

		// 2. Create new object
		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
		// console.log(newArray);
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

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.minArrIdx++,
		};
	}

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

	render() {
		const { todoData } = this.state;

		const doneCount = todoData.filter((el) => el.done).length;
		const toDoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={toDoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={this.state.todoData}
					onDeleted={this.onDeleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}
				/>
				<AddItem onAddItem={this.onAddItem} />
			</div>
		);
	}
}
