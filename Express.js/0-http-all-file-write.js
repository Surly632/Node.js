const http = require('http');
const fs = require('fs');
const { type } = require('os');
const home_page_js = fs.readFileSync('./content/nav_bar_app/browser-app.js');
const  home_page= fs.readFileSync('./content/nav_bar_app/index.htm');
const  style= fs.readFileSync('./content/nav_bar_app/styles.css');
const  logo= fs.readFileSync('./content/nav_bar_app/logo.svg');


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/') {
    res.writeHead(200,{'content-type':'text/html'});
    res.write(home_page); 
    res.end();
    return;
    }
    else if(url==='/browser-app.js') {
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(home_page_js);
        res.end();
        return;
    }
    else if(url==='/styles.css') {
        res.writeHead(200,{'content-type':'text/css'});
         res.write(style);
         res.end();
         return;
    }
    else if(url==='/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(logo);
        res.end();
        return;
    }
   res.writeHead(404,{'content-type':'text/html'})
   res.end('Ops! Page not Found...');
    return;
})

server.listen(5000,()=>{
    console.log('server is listening to port: 5000...');
})