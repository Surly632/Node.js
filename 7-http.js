const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.write(`
     <h1> <b> This is About Page</h1> <br>
     <a href="/"> Home </a> <br>
    `);
    res.end('A short History!');
    return;
  } else if (req.url === '/') {
    res.write(`
    <h1> <b> This is Home Page</h1> <br>
     <a href="/about"> About </a> <br>
    `)
    res.end('This is our Home Page!');
    return;
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <h1><b>404 Error!!</b></h1> <br>
      <p>This page does not exist!</p> <br>
      <a href="/">Home</a>
    `);
    return;
  }
});

/*server.listen(5000); */
server.listen(5000,()=>{
console.log('server is listening to port:5000...');
});
