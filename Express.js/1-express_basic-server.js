/*
app.GET
app.post
app.put   : For updating the data
app.delete 
app.all  : for middleware {Mind_Granade}
app.use
app.listen
*/
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Hello Wadu Hek</h1>`);
    res.end();
    return;
})
app.get('*',(req,res)=>{
    res.status(404).send(`<h1>Wadu Hek bro!<h1>
    <a href="/"> Home </a>
    `);
    res.writeHead(404,{'content-type': 'text/html'});
    res.end(); 
    return;
})

app.listen(5000,()=>{
    console.log('Server is listening to port : 5000 ...');
})