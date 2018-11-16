import express from 'express';
const app = express();

require('./config')(app);

module.exports = app;