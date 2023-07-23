const express = require('express');
const data = require('./data');
const app = express();

/* 
  'query' can be any string
*/
app.get('/api/v1/query',(req,res)=>{
    const search = req.query.search;
    const limit = req.query.limit;
   if(search=='people') {
     const n = Number(limit);
     const people_array = data.people.slice(0,n);
     res.send(people_array);
     return;
   }
   if(search=='products') {
     const n = Number(limit);
     const person_array=[...data.people];
     res.send(person_array.slice(0,n));
     return;
   }
  res.send(`
   <h1> Wadu Hek Bro? </h1> <br>
   <a href="?search=people&limit=3"> Right Search </a>
  `); 
  return;
}) 

app.all('*',(req,res)=>{
    res.status(404).send('Wadu Hek Bro!');
    return;
})

app.listen(5000,()=>{
    console.log('Server is listening to port : 5000 ...');
})