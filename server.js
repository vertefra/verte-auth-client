import express from 'express';
import { dirname } from 'path';
import { fileURLtoPath } from 'url';

const _dirname = dirname(fileURLtoPath(import.meta.url));
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.static(_dirname + '/build'));

app.get('*', (req, res) => {
	res.sendFile(_dirname + '/build/index.html');
});

app.listen(PORT, () => {
	console.log('listen on port => ', PORT);
});
