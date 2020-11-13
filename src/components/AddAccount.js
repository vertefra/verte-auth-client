import React, { useContext, useState } from 'react';
import { addAccount } from '../actions/accountActions';
import {
	app_set_error,
	app_set_loading,
	app_set_message,
} from '../actions/appActions';
import { AppContext } from '../Store';

const AddAccount = () => {
	const [appState, dispatchAppState] = useContext(AppContext);
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const handleChange = (ev) => {
		setCredentials({
			...credentials,
			[ev.target.id]: ev.target.value,
		});
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		dispatchAppState(app_set_loading(true));
		const data = await addAccount(
			credentials.username,
			credentials.password,
		);
		if (data.success) {
			console.log(data);
			dispatchAppState(app_set_error(''));
			dispatchAppState(app_set_loading(false));
			dispatchAppState(app_set_message('Account Added!'));
		} else {
			dispatchAppState(app_set_loading(false));
			console.log(data);
			dispatchAppState(app_set_error(data.error));
		}
	};

	return (
		<div className="container column">
			<h2 className="secondHeader">Add an account</h2>
			<form className="form column">
				<div className="formDataGroup">
					<label className="formLabel">Username</label>
					<input
						type="text"
						id="username"
						className="formControll"
						value={credentials.username}
						onChange={handleChange}
					></input>
				</div>
				<div className="formDataGroup">
					<label className="formLabel">Password</label>
					<input
						type="text"
						id="password"
						className="formControll"
						value={credentials.password}
						onChange={handleChange}
					></input>
				</div>
				<button type="submit" className="tab" onClick={handleSubmit}>
					Add Account
				</button>
			</form>
		</div>
	);
};

export default AddAccount;
