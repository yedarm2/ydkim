import axios from 'axios';

export async function getUsers() {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

	return data;
}

export async function getUser(id) {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

	return data;
}
