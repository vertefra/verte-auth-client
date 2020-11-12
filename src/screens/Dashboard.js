import React, { useContext } from 'react';
import { AppContext, UserInfoContext } from '../Store';

const Dashboard = () => {
	const [appState, dispatchAppState] = useContext(AppContext);
	const [userInfo, dispatchUserInfo] = useContext(UserInfoContext);

	console.log('DASH:', userInfo);

	return (
		<div>
			<div>{appState.auth && <></>}</div>
		</div>
	);
};

export default Dashboard;
