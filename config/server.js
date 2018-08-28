var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs'); // Altera o view engine que o express está utilizando para EJS
app.set('views', './app/views'); // Altera o diretório de views

consign()   //autoload
    .include('app/routes')
    .then('config/dbConnection.js') //necessário apontar a extensão para que o node não se confunda com um diretório
    .then('app/models') //carrega todas as models presentes na pasta models
    .into(app); //reconhece todos os arquivos da pasta routes e incluí os módulos dentro do servidor "app"

module.exports = app;