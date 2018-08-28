var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    var connetion = dbConnection();

    app.get('/noticias', function(req, res){
        connetion.query('select * from noticias', function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });    
    });
}