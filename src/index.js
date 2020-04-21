import React from 'react';
import ReactDom from 'react-dom';

// IMPORT COMPONENTS
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
	return (
		<div>
			<SearchPanel />
			<AppHeader />
			<TodoList />
		</div>
	);
};

ReactDom.render(<App />, document.getElementById('root'));
