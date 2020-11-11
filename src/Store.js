import React, { createContext, useReducer } from 'react';
import { appDefaultState } from './defaultStates/appStates.js';
import { userInfoDefaultState } from './defaultStates/userStates.js';

import { appStateReducer } from './reducers/appReducers.js';
import { userInfoReducer } from './reducers/userReducers.js';

const Store = ({ children }) => {
	// appState reducer
	const [appState, appStateDispatch] = useReducer(
		appStateReducer,
		appDefaultState,
	);

	// userInfo reducer
	const [userInfo, userInfoDispatch] = useReducer(
		userInfoReducer,
		userInfoDefaultState,
	);

	return (
		<AppContext.Provider value={[appState, appStateDispatch]}>
			<UserInfoContext.Provider value={[userInfo, userInfoDispatch]}>
				{children}
			</UserInfoContext.Provider>
		</AppContext.Provider>
	);
};

export const AppContext = createContext(appDefaultState);
export const UserInfoContext = createContext(userInfoDefaultState);

export default Store;
