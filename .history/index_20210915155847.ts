import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile("index.html", (err, data)=>
{
  console.log(data);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});