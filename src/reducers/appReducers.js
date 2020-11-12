const { appDefaultState } = require('../defaultStates/appStates');

export const appStateReducer = (
	state = appDefaultState,
	action = undefined,
) => {
	switch (action.type) {
		case 'APP_SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};

		case 'APP_SET_ERROR':
			return {
				...state,
				error: action.payload,
			};

		case 'APP_SET_MESSAGE':
			return {
				...state,
				message: action.payload,
			};

		default:
			return state;
	}
};
