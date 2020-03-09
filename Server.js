const http = require('http');

const parser = require('body-parser');

const express = require('express');

const app = express();

app.use(parser.urlencoded({extended: false})); // Parser. npm install --save body-parser

app.use('/', (req, res, next) => {
    console.log('Always runnin boiii');
    next();
});

app.use('/some-path', (req, res, next) => {
    console.log('It\'s ya boi!');
    res.send('<form action="/thing" method="POST"><input type="text" name="title"><button>Add Something</button></form>'); // Allows us to attach a body of any type (including a file)
});

app.use('/thing', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('It\'s ya boi!');
    res.send('<h1>Hot Damn!</h1>'); // Allows us to attach a body of any type (including a file)
});

const server = http.createServer(app);

server.listen(3000);
