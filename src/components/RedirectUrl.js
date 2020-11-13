import React, { useContext, useState } from 'react';
import {
	app_set_error,
	app_set_loading,
} from '../actions/appActions';
import { updateUser, userInfo_set } from '../actions/userActions';
import { AppContext, UserInfoContext } from '../Store';

const RedirectUrl = () => {
	const [userInfo, dispatchUserInfo] = useContext(UserInfoContext);
	const [appState, dispatchAppState] = useContext(AppContext);
	const [input, setInput] = useState({
		readOnly: true,
		redirectURL: userInfo.redirectURL,
	});

	const handleButtonClick = async (ev) => {
		ev.preventDefault();
		if (!input.readOnly) {
			dispatchAppState(app_set_loading(true));
			const data = await updateUser({
				redirectURL: input.redirectURL,
			});

			if (data.success) {
				dispatchAppState(app_set_error(''));
				dispatchUserInfo(userInfo_set(data.user));
				dispatchAppState(app_set_loading(false));
			} else {
				dispatchAppState(app_set_loading(false));
				dispatchAppState(app_set_error(data.error));
			}
		}

		// toggle button
		const readOnly = input.readOnly ? false : true;
		setInput({
			...input,
			readOnly,
		});
	};

	console.log('Loading: ', appState.loading);

	return (
		<form className="form">
			<div className="formDataGroup">
				<label className="formLabel">Redirect url</label>
				<input
					type="text"
					className="formControll"
					value={input.redirectURL}
					readOnly={input.readOnly}
					onChange={(ev) =>
						setInput({
							...input,
							redirectURL: ev.target.value,
						})
					}
				/>
			</div>
			<button className="tab" onClick={handleButtonClick}>
				{input.readOnly ? 'change redirect url' : 'save redirect url'}
			</button>
		</form>
	);
};

export default RedirectUrl;
