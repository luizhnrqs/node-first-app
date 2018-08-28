// M do design pattern do MVC
module.exports = function(){
    
    this.getNoticias = function (connection, callback){
        connection.query('select * from noticias', callback);
    };

    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where id_noticia = 2', callback);
    };

    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into noticias set ?', noticia, callback); //MySQL suporta inserção via JSON com os mesmos nomes de coluna da tabela, será substituído no lugar do interrogação '?'
    };

    return this;
};