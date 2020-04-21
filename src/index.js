import React from 'react';
import ReactDom from 'react-dom';

// IMPORT COMPONENTS
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
	const todoData = [
		{ label: 'Drink coffee', important: false, key: 2 },
		{ label: 'Make Awersome code', important: true, key: 2 },
		{ label: 'Have a lunch', important: false, key: 3 },
	];

	return (
		<div>
			<SearchPanel />
			<AppHeader />
			<TodoList todos={todoData} />
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('root'));
