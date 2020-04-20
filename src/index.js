import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	);
};

const AppHeader = () => {
	return <h1>My Todo list</h1>;
};

const SearchPanel = () => {
	return <input type="text" placeholder="search" />;
};

const el = (
	<div>
		<SearchPanel />
		<AppHeader />
		<TodoList />
	</div>
);

ReactDom.render(el, document.getElementById('root'));
