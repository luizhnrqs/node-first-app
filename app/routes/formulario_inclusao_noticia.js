module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render('../views/admin/form_add_noticia');
    });
}