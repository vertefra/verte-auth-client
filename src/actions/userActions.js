import axios from 'axios';
import { server } from '../index.js';

// ACTIONS
export const userInfo_set = (payload) => {
	localStorage.setItem('userInfo', JSON.stringify(payload));
	console.log(payload);
	return { type: 'USERINFO_SET', payload };
};

// FUNCTIONS
export const loginUser = async ({ email, password }) => {
	try {
		const { data } = await axios.post(`${server}api/users/login`, {
			email,
			password,
		});
		return data;
	} catch (err) {
		return err.response.data;
	}
};
