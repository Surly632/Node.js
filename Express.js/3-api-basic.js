const express = require('express');
const path = require('path');
const app = express();
const data = require('./data');

app.get('/',(req,res)=>{
    const v= [data.people,data.products];
    res.json(v); /* Or I can  just send 
    res.json(data.products): this for single json file only.  
    Javascript is a joke, but better than python
    */;
    return;
})

app.all('*',(req,res)=>{
    res.status(404).send('Wadu hek bro!');
})
app.listen(5000,()=>{
    console.log('Server is listening to port : 5000');
});