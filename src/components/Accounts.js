import React from 'react';
import Account from './Account';

const Accounts = ({ accounts }) => {
	return (
		<div className="showcase">
			{accounts.length > 0 &&
				accounts.map((a, i) => {
					return (
						<div key={i}>
							<Account account={a} />
						</div>
					);
				})}
		</div>
	);
};

export default Accounts;
