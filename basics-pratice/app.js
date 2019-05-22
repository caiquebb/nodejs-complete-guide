const http = require('http');
const router = require('./routes');

const server = http.createServer(router);

server.listen(3000);

console.log('Start server on port 3000');