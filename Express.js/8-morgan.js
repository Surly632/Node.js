const express=require('express');
const data = require('./data');
const logger = require('./logger');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send('Hello!');
})
app.get('/about',(req,res)=>{
  res.send('About');
})
 
app.all('*',(req,res)=>{
    res.status(404).send('Can not get url'); 
})

app.listen(5000,()=>{
    console.log('Server is listening to port : 5000 ...');
})