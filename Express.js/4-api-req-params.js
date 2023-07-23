const express = require('express');
const path = require('path');
const app = express();
const data = require('./data');


app.get('/',(req,res)=>{
    res.send(`
    <h1> Welcome To Home Page  </h1> <br>
    <h1> <a href="/api/products/"> Products </a> </h1>
    `);
    return;
})

app.get('/api/products/',(req,res)=>{
    res.send(data.products);
    return;
});

app.get('/api/products/:id',(req,res)=>{
    const id = req.params.id;
    
    const product = data.products.find( 
        (x)=>x.id===Number(id)
      );
      if(product==undefined) {
        res.status(404).send(`
        <h1> Wadu Hek Bro</h1> <br>
        <h1> <a href="/api/products/1"> Products:1 </a> </h1>
        `);
        return;
    }
    res.send(product);
    return;
});
app.get('/api/products/:id/reviews/:rid',(req,res)=>{
    const rid = Number(req.params.rid);
    const reviews = data.people.find((x)=> x.id===rid);
    if(!reviews) {
        res.status(404).send(`
        <h1> Wadu Hek Bro</h1> <br>
        <h1> <a href="/api/products/1"> Products:1 </a> </h1>
        `);
    }
    res.send(reviews);
})

app.all('*',(req,res)=>{
    res.status(404).send('Wadu Hek Bro!');
    return;
})
app.listen(5000,()=>{
    console.log('Server is listening to port: 5000 ...');
})