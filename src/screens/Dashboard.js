import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getAccounts } from '../actions/accountActions';
import Accounts from '../components/Accounts';
import AddAccount from '../components/AddAccount';
import Message from '../components/Message';
import { AppContext, UserInfoContext } from '../Store';

const Dashboard = () => {
	const [appState] = useContext(AppContext);
	const [userInfo] = useContext(UserInfoContext);

	const [accounts, setAccounts] = useState(
		JSON.parse(localStorage.getItem('accounts')) || [],
	);

	useEffect(() => {
		if (userInfo.auth) {
			(async () => {
				const data = await getAccounts(userInfo.ID);
				setAccounts(data.accounts);
			})();
		}
	}, [userInfo.auth, userInfo.ID]);

	console.log(accounts);

	return (
		<div className="container column">
			{appState.error && (
				<Message variant="warning" message={appState.error} />
			)}
			<h1 className="mainHeader">dashboard</h1>
			<div>
				{userInfo.auth ? (
					<>
						{accounts.length > 0 ? (
							<div className="row">
								<Accounts accounts={accounts} />
								<AddAccount />
							</div>
						) : (
							<Message message="This Project does not have any account linked yet" />
						)}
					</>
				) : (
					<Redirect to={`${appState.redirect}`} />
				)}
			</div>
		</div>
	);
};

export default Dashboard;
