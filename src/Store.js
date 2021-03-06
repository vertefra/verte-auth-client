import React, { createContext, useReducer } from 'react';
import { appDefaultState } from './defaultStates/appStates.js';
import { userInfoDefaultState } from './defaultStates/userStates.js';
import { appStateReducer } from './reducers/appReducers.js';
import { userInfoReducer } from './reducers/userReducers.js';

const Store = ({ children }) => {
	// appState reducer

	const [appState, dispatchAppState] = useReducer(
		appStateReducer,
		appDefaultState,
	);

	const userInfoFromStorage = JSON.parse(
		localStorage.getItem('userInfo'),
	);

	const userInfoState = userInfoFromStorage || userInfoDefaultState;

	// userInfo reducer
	const [userInfo, dispatchUserInfo] = useReducer(
		userInfoReducer,
		userInfoState,
	);

	return (
		<AppContext.Provider value={[appState, dispatchAppState]}>
			<UserInfoContext.Provider value={[userInfo, dispatchUserInfo]}>
				{children}
			</UserInfoContext.Provider>
		</AppContext.Provider>
	);
};
export const UserInfoContext = createContext(userInfoDefaultState);
export const AppContext = createContext(appDefaultState);

export default Store;
