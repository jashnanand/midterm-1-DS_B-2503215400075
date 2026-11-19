
const http = require('http');

const server = http.createServer((req, res) => {
 
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello ABES');
});

server.listen(3000, () => {
  console.log('Server is running! Open http://localhost:3000 in your browser.');
});
