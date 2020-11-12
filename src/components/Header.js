import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	userInfo_auth,
	userInfo_unset,
} from '../actions/userActions';
import { AppContext, UserInfoContext } from '../Store';

const Header = ({ history }) => {
	const [appState, dispatchAppState] = useContext(AppContext);
	const [userInfo, dispatchUserInfo] = useContext(UserInfoContext);

	const handleLogOut = (ev) => {
		ev.preventDefault();
		dispatchUserInfo(userInfo_auth(false));
		dispatchUserInfo(userInfo_unset());
		history.push('/login');
	};

	return (
		<header className="row-apart">
			<div>verte-auth</div>
			<nav className="navBar row-apart">
				<ul className="row-spaced tabs">
					<Link to="/projects">
						<li className="tab">Project Settings</li>
					</Link>
					<Link to="/">
						<li className="tab">Project Dashboard</li>
					</Link>
				</ul>
				{appState.auth ? (
					<>
						<h4>{userInfo.email}</h4>
						<button className="btn-primary" onClick={handleLogOut}>
							log out
						</button>
					</>
				) : (
					<>
						<Link to="/login">
							<button className="btn-primary">login</button>
						</Link>
						<Link to="/login">
							<button className="btn-primary">register</button>
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};
export default Header;
