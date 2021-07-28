import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
	padding: 48px 32px 24px;

	border-bottom: 1px solid #e9ecdf;

	h1 {
		margin: 0;
		font-size: 36px;
		color: #343a40;
	}

	.day {
		margin: 4px 0 0;
		color: #868e96;
		font-size: 21px;
	}

	.tasks-left {
		color: #20c997;
		font-size: 18px;
		margin: 40px 0 0;
		font-weight: bold;
	}
`;

function TodoHead() {
	return (
		<TodoHeadBlock>
			<h1>2021년 7월 28일</h1>
			<div className="day">일요일</div>
			<div className="tasks-left">할 일 2개 남음</div>
		</TodoHeadBlock>
	);
}

export default TodoHead;
