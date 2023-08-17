require('dotenv').config();
const express= require('express');
const server = express();
const logger = require('morgan');

server.use((req, res, next) => {
    console.log(req.method, req.id, req.path);
    next();
})