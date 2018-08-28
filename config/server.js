var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs'); // Altera o view engine que o express está utilizando para EJS
app.set('views', './app/views'); // Altera o diretório de views

app.use(bodyParser.urlencoded({extended : true})); //middleware bodyparser, parametro extende permite que seja implementado através de json as urls codificadas

consign()   //autoload
    .include('app/routes')
    .then('config/dbConnection.js') //necessário apontar a extensão para que o node não se confunda com um diretório
    .then('app/models') //carrega todas as models presentes na pasta models
    .into(app); //reconhece todos os arquivos da pasta routes e incluí os módulos dentro do servidor "app"

module.exports = app;