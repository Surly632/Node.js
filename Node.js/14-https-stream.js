const fs = require('fs');
const http = require('http');
const path = './txt/bigFile.txt';
const stream = fs.createReadStream(path, 'utf-8');

const server = http.createServer((req, res) => {
  stream.on('data', (chunk) => {
    res.write(chunk);
    return;
  });
 /* Not necessary unless {Refresh}*/
  stream.on('end', () => {
    res.end();
  });
 
  stream.on('error', (err) => {
    res.end(err.message);
  });
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
