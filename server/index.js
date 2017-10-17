const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

const app = module.exports = express();
app.use(cors());

app.use(bodyParser.json({ }));
app.use(express.static(`${__dirname}/../tmp`));
app.use(express.static(`${__dirname}/../frontend`));
app.use(express.static(`${__dirname}/../frontend/dist`));

app.use('/api', router.api);
app.use(router.general);

app.use(router.main);
app.use(errorHandler(app));
