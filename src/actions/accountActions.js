import axios from 'axios';
import { server } from '..';

// FUNCTIONS

export const getAccounts = async () => {
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
	const { token, ID } = userInfo;
	try {
		const config = {
			headers: {
				'Content-Type': 'Application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const { data } = await axios.get(
			`${server}api/users/${ID}/accounts`,
			config,
		);
		return data;
	} catch (err) {
		return err.response.data;
	}
};

export const addAccount = async (username, password) => {
	const userInfo = JSON.parse(localStorage.getItem('userInfo'));
	const { token, key, ID } = userInfo;
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				key,
			},
		};

		const { data } = await axios.post(
			`${server}api/users/${ID}/accounts/signup`,
			{ username, password },
			config,
		);
		return data;
	} catch (err) {
		return err.response.data;
	}
};
