import React from 'react';

const Account = ({ account }) => {
	const rawTime = new Date(account.CreatedAt);

	console.log(rawTime);
	const timestamp = rawTime.toLocaleString('En-Us');

	return (
		<div className="showCard">
			<h1 className="showCardTitle">
				ID:{account.ID}-{account.username}
			</h1>
			<div></div>
			<div>Created: {timestamp}</div>
			<button className="btn-primary">delete account</button>
		</div>
	);
};

export default Account;
