const http = require('http');

const path = require('path');

const parser = require('body-parser');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

app.use(parser.urlencoded({extended: false})); // Parser. npm install --save body-parser

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const server = http.createServer(app);

server.listen(3000);
