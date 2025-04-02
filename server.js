// This is a simple Node.js server that responds with "Hello World".
// It uses the built-in http module to create a server that listens on a specified port.
// The server responds with a plain text message when accessed.
// To run this server, save the code in a file named server.js and run it using Node.js.
// Make sure you have Node.js installed on your machine.


const http = require('http');


const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
