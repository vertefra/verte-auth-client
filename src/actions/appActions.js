export const app_set_loading = (payload) => {
	return { type: 'APP_SET_LOADING', payload };
};

export const app_set_error = (payload) => {
	return { type: 'APP_SET_ERROR', payload };
};

export const app_set_message = (payload) => {
	return { type: 'APP_SET_MESSAGE', payload };
};
