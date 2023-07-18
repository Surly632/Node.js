const { log } = require('console');
const fs = require('fs');
const http = require('http');
const path ='./txt/bigFile.txt';
const stream = fs.createReadStream(path,'utf-8');

const server = http.createServer((req,res)=>{
   
});