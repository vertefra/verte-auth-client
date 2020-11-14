import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setup from './config';
import reportWebVitals from './reportWebVitals';
import Store from './Store';

const config = setup();

export const server = config.go_server;

console.log('server => ', server);

ReactDOM.render(
	<React.StrictMode>
		<Store>
			<App />
		</Store>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
