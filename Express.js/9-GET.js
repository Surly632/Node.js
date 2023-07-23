const express=require('express');
const data = require('./data');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send('Hello!');
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