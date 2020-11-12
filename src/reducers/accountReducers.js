export const accountsReducer = (state = [], action = {}) => {
	switch (action.type) {
		case 'ACCOUNTS_SET':
			return action.payload;

		default:
			return state;
	}
};
