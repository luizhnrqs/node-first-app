var http = require('http');

var server = http.createServer(function (req, res){ // req = request, res = response

    var categoria = req.url; // pega a url que está sendo requisitada, ex http://localhost:3000/tecnologia retornará /tecnologia

    if(categoria == '/tecnologia')
    {
        res.end("<html><body>Noticias de Tecnologia</body></html>");
    }
    else if(categoria == '/moda')
    {
        res.end("<html><body>Noticias de Moda</body></html>");
    }
    else if(categoria == '/beleza')
    {
        res.end("<html><body>Noticias de Beleza</body></html>");
    }
    else
    {
        res.end("<html><body>Portal de noticias</body></html>");
    }    

}); //Cria um servidor http

server.listen(3000);    // sobe o servidor na porta 3000