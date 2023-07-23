const express=require('express');
const data = require('./data');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const exp = require('constants');

const app = express();

app.use(express.static('./content/form'));
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/',(req,res)=>{
    const homepage = path.join(__dirname,'./content/form/index.html');
    res.send(homepage);
    return;
})
app.post('/login',(req,res)=>{
    const name = req.body.name;
    if(name){
        res.status(200).send(`welcome ${name}`);
        return;
    }
    res.status(401).send(`<h1> Please input valid name</h1>
           <a href="/"> Home </a>
   `)
   return;
})
app.post('/api/people',(req,res)=>{
    const name = req.body.name;
    if(name) {
        console.log(name);
         res.send({success:true,name:name});
         return;
    }
    res.send('Please provide a name');
    return;
})

app.get('/api/people',(req,res)=>{
  res.status(200).json(data); 
  return;
})

app.all('*',(req,res)=>{
    res.status(404).send('Can not get url'); 
})

app.listen(5000,()=>{
    console.log('Server is listening to port : 5000 ...');
})