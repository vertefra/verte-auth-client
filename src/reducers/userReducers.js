import { userInfoDefaultState } from '../defaultStates/userStates';

export const userInfoReducer = (
	state = userInfoDefaultState,
	action = {},
) => {
	console.log(state, action);
	switch (action.type) {
		case 'USERINFO_SET':
			return action.payload;

		case 'USERINFO_DELETE':
			return userInfoDefaultState;

		case 'USERINFO_UPDATE':
			return {
				...state,
				...action.payload,
			};

		default:
			return {};
	}
};
