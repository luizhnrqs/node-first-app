module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var noticias = noticiasModel.getUltimasNoticias(function(error, result){ //function de callback que será executada após terminar a query
        res.render('home/index', {noticias : result});
    });    
};