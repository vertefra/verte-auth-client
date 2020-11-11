import axios from 'axios';

export const loginUser = async ({ email, password }) => {
	try {
		const { data } = await axios(`/api/users/login`, {
			email,
			password,
		});
	} catch (err) {}
};
