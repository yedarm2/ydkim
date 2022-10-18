export interface TodoPayload {
	jobName: string;
	jobContent: string;
}

export interface ITodo {
	id: number;
	jobName: string;
	jobContent: string;
	isCompleted: boolean;
}
