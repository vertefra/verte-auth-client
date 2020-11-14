const setup = () => {
	const node_env = process.env.NODE_ENV;

	if (node_env === 'development') {
		return {
			go_server: 'http://127.0.0.1:4999/',
		};
	}

	if (node_env === 'production') {
		return {
			go_server: 'https://verte-auth-server.herokuapp.com/',
		};
	}
};

export default setup;
