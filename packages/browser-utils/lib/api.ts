import axios, { AxiosResponse, Method, AxiosDefaults } from 'axios';

const api = async <Data, Meta = any>({
	url,
	params,
	method,
}: {
	url: string;
	params: any;
	method: Method;
}) => {
	const response: AxiosResponse<{ data: Data; meta: Meta }> = await axios(url, {
		method,
		params,
	});

	return response.data;
};

export const initializeApi = (config: Partial<AxiosDefaults>) => {
	for (const [key, value] of Object.entries(config)) {
		axios.defaults[key] = value;
	}
};

export const get = <Data, Meta = any>(url: string, params: any) => {
	return api<Data, Meta>({
		url,
		method: 'GET',
		params,
	});
};

export const post = <Data, Meta = any>(url: string, params: any) => {
	return api<Data, Meta>({
		url,
		method: 'POST',
		params,
	});
};

export const put = <Data, Meta = any>(url: string, params: any) => {
	return api<Data, Meta>({
		url,
		method: 'PUT',
		params,
	});
};

// * delete는 변수 이름으로 지정할 수 없어서... ㅠㅠ
export const apiDelete = <Data, Meta = any>(url: string, params: any) => {
	return api<Data, Meta>({
		url,
		method: 'DELETE',
		params,
	});
};
