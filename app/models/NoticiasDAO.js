// M do design pattern do MVC

function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback){
    this._connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback); //MySQL suporta inserção via JSON com os mesmos nomes de coluna da tabela, será substituído no lugar do interrogação '?'
};

NoticiasDAO.prototype.getUltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function(){
    return NoticiasDAO;
};