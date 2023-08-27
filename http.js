const http = require("http");

http.createServer(function (request, response) {
    console.log(request.url);

    if (request.url === '/') {
        response.write('welcome to the server')
        return response.end
    }

    if (request.url === "/about") {
      response.write("acerca de");
       return response.end;
    }

    response.write("Not Found");
    response.end;
  })
  .listen(8000);

console.log("Servidor escuchando en el puerto 3000");
