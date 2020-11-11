const { appDefaultState } = require('../defaultStates/appStates');

export const appStateReducer = (
	state = appDefaultState,
	action = '',
) => {
	switch (action.type) {
		case 'APP_LOADING_TRUE':
			return {
				...state,
				loading: true,
			};

		case 'APP_LOADING_FALSE':
			return {
				...state,
				loading: false,
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
