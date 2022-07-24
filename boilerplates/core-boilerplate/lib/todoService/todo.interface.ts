export interface TodoPayload {
	jobName: string;
	jobContent: string;
}

export interface Todo {
	id: number;
	jobName: string;
	jobContent: string;
	isCompleted: boolean;
}
