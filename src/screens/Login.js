import { useContext, useState } from 'react';
import {
	app_set_auth,
	app_set_error,
	app_set_loading,
} from '../actions/appActions';
import { loginUser, userInfo_set } from '../actions/userActions';
import Message from '../components/Message';
import { AppContext, UserInfoContext } from '../Store';

const Login = ({ history }) => {
	const [appState, dispatchAppState] = useContext(AppContext);
	const [userInfo, dispatchUserInfo] = useContext(UserInfoContext);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	console.log(userInfo);

	const handleChange = (ev) => {
		setCredentials({
			...credentials,
			[ev.target.id]: ev.target.value,
		});
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		dispatchAppState(app_set_loading(true));
		const data = await loginUser(credentials);
		if (data.success) {
			dispatchAppState(app_set_loading(false));
			dispatchAppState(app_set_auth(true));
			dispatchUserInfo(userInfo_set(data));
			history.push('/');
		} else {
			dispatchAppState(app_set_loading(false));
			dispatchAppState(app_set_error(data.error));
		}
	};

	return (
		<>
			<form className="form column">
				{appState.error && (
					<Message variant="warning" message={appState.error} />
				)}
				<div className="formDataGroup row-start">
					<label className="formLabel">email</label>
					<input
						type="text"
						id="email"
						className="formControll"
						value={credentials.email}
						onChange={handleChange}
					/>
				</div>

				<div className="formDataGroup row-start">
					<label className="formLabel">password</label>
					<input
						type="text" // change to password!
						id="password"
						className="formControll"
						value={credentials.password}
						onChange={handleChange}
					/>
				</div>

				<button
					type="submit"
					className="btn-primary"
					value="submit"
					onClick={handleSubmit}
				>
					submit
				</button>
			</form>
		</>
	);
};

export default Login;
