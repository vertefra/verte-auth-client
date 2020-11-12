import { axios } from 'axios';
import { server } from '..';
// ACTIONS

export const accounts_set = (payload) => {
	localStorage.setItem('accounts', JSON.stringify(payload));
	return { type: 'ACCOUNTS_SET', payload };
};

// FUNCTIONS

export const getAccounts = async (id) => {
	try {
		const { data } = axios.get(`${server}api/users/${id}/accounts`);
		return data;
	} catch (error) {
		return error.response.data;
	}
};
