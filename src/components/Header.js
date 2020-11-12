import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserInfoContext } from '../Store';

const Header = () => {
	const [userInfo] = useContext(UserInfoContext);

	return (
		<header className="row-apart">
			<div>verte-auth</div>
			{userInfo ? (
				<nav className="navBar row-apart">
					<ul className="row-spaced tabs">
						<Link to="/projects">
							<li className="tab">Project Settings</li>
						</Link>
						<Link to="/">
							<li className="tab">Project Dashboard</li>
						</Link>
					</ul>
					<button className="btn-primary">log out</button>
				</nav>
			) : (
				<>
					<button className="btn-primary">login</button> or
					<button className="btn-primary">register</button>
				</>
			)}
		</header>
	);
};
export default Header;
