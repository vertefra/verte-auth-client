import { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Store, { AppContext } from './Store';

import './style/App.css';

function App() {
	const [appState] = useContext(AppContext);

	return (
		<div className="App">
			<BrowserRouter>
				{appState.loading ? (
					'...Loading'
				) : (
					<>
						<Header />
						<Route path="/" component={Dashboard} exact></Route>
						<Route path="/login" component={Login}></Route>
					</>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
