import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './Components/TodoCreate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoTemplate from './Components/TodoTemplate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
	body {
		background: #e9ecef;
	}
`;

function App() {
	return (
		<TodoProvider>
			<GlobalStyle />
			<TodoTemplate>
				<TodoHead />
				<TodoList />
				<TodoCreate />
			</TodoTemplate>
		</TodoProvider>
	);
}

export default App;
