const express = require('express');
const path = require('path');
const app = express();

/* Setup Static and Middleware */ 
app.use(express.static('./content/public')); /* For a simple site this line will work fine {Remember} */

/* But I would like to use this one */
app.get('/',(req,res)=>{
        let homepage = path.join(__dirname,'./content/nav-bar-app/index.html');
        res.sendFile( homepage); 
        return;
});
app.all('*',(req,res)=>{
    res.status(404).send(`<p>'Wadu Hek Bro!!'</p>
    <br> <a href="/"> <h3>Home</h3> </a>
    `);
    return;
})

app.listen(5000,(req,res)=>{
    console.log('Server is listening to port: 5000 ...');
})