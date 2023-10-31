const http = require('http');
const PORT = 3000;

const server = http.createServer(PORT , () => {
    // res.writeHead(200,{'Content-Type': 'text/plain'});
    // res.end(`Servidor listo en http://localhost:${PORT}/`);
    console.log('Servidor levantado');
});

server.listen(PORT);


