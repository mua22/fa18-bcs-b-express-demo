const http = require("http");
const server = http.createServer(serverCreated);
function serverCreated(request, response) {
  if (request.url == "/") {
    response.write(JSON.stringify([1, 4, 5, 6]));
    response.end();
  }
  if (request.url == "/hobbies") {
    response.write("My Hobbies");
    response.end();
  }
}

server.listen(3000);
