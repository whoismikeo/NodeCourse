const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Heyoooo');
    next(); // Allows the request to continue to the next middleware
});

app.use((req, res, next) => {
    console.log('It\'s ya boi!');
    res.send('<h1>Hot Damn!</h1>'); // Allows us to attach a body of any type (including a file)
});

const server = http.createServer(app);

server.listen(3000);
