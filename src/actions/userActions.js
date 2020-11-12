import axios from 'axios';
import { server } from '../index.js';

export const userInfo_set = (payload) => {
	// localStorage.setItem('userInfo', JSON.stringify(payload));
	return { type: 'USERINFO_SET', payload };
};

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
