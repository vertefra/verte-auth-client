import { userInfoDefaultState } from '../defaultStates/userStates';

export const userInfoReducer = (
	state = userInfoDefaultState,
	action = {},
) => {
	switch (action.type) {
		case 'USERINFO_SET':
			return action.payload;

		case 'USERINFO_UNSET':
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
