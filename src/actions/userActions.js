import axios from 'axios';
import { server } from '../index.js';

// ACTIONS
export const userInfo_set = (payload) => {
	payload.auth = true;
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

export const updateUser = async (modElement) => {
	let userInfo = JSON.parse(localStorage.getItem('userInfo'));

	userInfo = {
		...userInfo,
		...modElement,
	};

	const { token, ID } = userInfo;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	console.log(userInfo);
	try {
		const { data } = await axios.put(
			`${server}api/users/${ID}`,
			userInfo,
			config,
		);
		return data;
	} catch (err) {
		return err.response.data;
	}
};
