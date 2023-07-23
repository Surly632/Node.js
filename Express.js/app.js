const express=require('express');
const data = require('./data');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { log, error } = require('console');
const exp = require('constants');

const app = express();

app.use(express.static('./content/form'));
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const result=[];
app.get('/api/people',(req,res)=>{
    let v = data.people.map((x)=>{
        return x.name;
    })
    res.json(v);
})
app.post('/api/people',(req,res)=>{
    console.log(req.body.name);
    console.log(error);
    // if(req.body.name) {
        res.json({success:true,data:req.body.name}); 
    // }
//    else {
    //  res.status(404).send('Provide Credential');
//    }
})

app.post('/login',(req,res)=>{
   res.json({success:true,data:data});
})

app.all('*',(req,res)=>{
    res.status(404).send('Can not get url'); 
})

app.listen(5000,()=>{
    console.log('Server is listening to port : 5000 ...');
})