//  Cargamos el módulo Http
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//  Creamos el servidor Http
const server = http.createServer(function (req, res) {
  //    Definimos la respuesta de la cabecera Http
  res.writeHead(200, { "Content-Type": "text/plain" });

  //    Enviamos el cuerpo de la respuesta
  res.end("Hello World\n");
});

//  Imprimimos por consola cuando se arranca el servidor
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});