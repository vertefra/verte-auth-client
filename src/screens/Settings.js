import React, { useContext } from 'react';
import Message from '../components/Message';
import RedirectUrl from '../components/RedirectUrl';
import { AppContext } from '../Store';

const Settings = () => {
	const [appState] = useContext(AppContext);

	return (
		<div className="container column">
			<h2 className="mainHeader">Settings</h2>
			{appState.error && (
				<Message message={appState.error} variant="warning" />
			)}
			<RedirectUrl />
		</div>
	);
};

export default Settings;
