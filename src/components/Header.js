import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, UserInfoContext } from '../Store';

const Header = () => {
	const [appState] = useContext(AppContext);
	const [userInfo] = useContext(UserInfoContext);

	console.log(userInfo);

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
					<li>{userInfo.email}</li>
				</ul>
				{appState.auth ? (
					<button className="btn-primary">log out</button>
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
