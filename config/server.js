var express = require('express');
var app = express();

app.set('view engine', 'ejs'); // Altera o view engine que o express está utilizando para EJS
app.set('views', './app/views'); // Altera o diretório de views

module.exports = app;