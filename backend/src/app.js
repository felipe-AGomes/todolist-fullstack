const express = require('express');
const cors = require('cors');
const router = require('./server/router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;
