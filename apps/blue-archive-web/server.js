const express = require('express');

const app = express();

app.get('/cache', (req, res) => {
	const now = new Date();
	console.log('express route!!', now.toISOString());

	res.json({
		data: 111,
		time: now.toISOString(),
	});
});

app.listen(8000, () => {
	console.log('서버 연결!');
});
