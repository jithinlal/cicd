const cors = require('cors');
const express = require('express');

const indexRoute = require('./routes');

const app = express();

(async () => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cors());

	app.use('/', indexRoute);

	app.listen(3000, () => {
		console.log(`server running on port :: 3000`);
	});
})();
