const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./src/routes');
const enviroment = require('./src/config/enviroment');

enviroment.variables();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routers);

module.exports = app;
