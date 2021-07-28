import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
	flex: 1 1 auto;
	padding: 20px 32px 48px;
	overflow-y: auto;
`;

function TodoList() {
	return (
		<TodoListBlock>
			<TodoItem text="프로젝트 생성하기" done />
			<TodoItem text="컴포넌트 스타일링 생성하기" done />
			<TodoItem text="Context 생성하기" />
			<TodoItem text="기능 구헌하기" />
		</TodoListBlock>
	);
}

export default TodoList;
