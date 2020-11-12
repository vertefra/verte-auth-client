import axios from 'axios';
import { server } from '../index.js';

// ACTIONS
export const userInfo_set = (payload) => {
	localStorage.setItem('userInfo', JSON.stringify(payload));
	return { type: 'USERINFO_SET', payload };
};

export const userInfo_unset = () => {
	localStorage.removeItem('userInfo');
	return { type: 'USERNINFO_UNSET' };
};

export const userInfo_auth = (payload) => {
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
	userInfo.auth = payload;
	console.log(userInfo);
	localStorage.setItem('userInfo', JSON.stringify(userInfo));
	return { type: 'USERINFO_AUTH', payload };
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
