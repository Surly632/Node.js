const express=require('express');
const data = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

/**
 *  req ==> middleware ==> res
 */


/**
 *  Syntax : app.use(logger); :ommiting path for all the address
 *           app.use('relative_path',logger) : particular address : {
 *           app.use('/api',logger); ==> it's gonna work for all : 
 *           '/api/foo' , '/api/foo/bar' , 'api/foo/bar/foo1/bar1/.....'
 * }
 **/
app.use('/about',[logger.logger,authorize.authorize]);

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