const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

let readpath = './txt/input.in';
let wrtiepath ='./txt/output.out';
let content='';
let read_  = async()=>{
   try {
     content =  await read(readpath,{encoding:'utf-8',flag:'r'});
    const sep = /[\n\r+]/
    
    content  = content.split(sep);
    let v=[];
    for(let i =0; i<content.length;i++) {
        if(content.at(i).length!=0)
        v.push(content.at(i).split(' '))
    } 
    let str ='';
    for(let i=0;i<v.length;i++) {
        str+=v[i].join(' ');
        str+=' ';
    }
    str = str.trim();
    str+='.'; 
    console.log(str);
    
    content = await read(readpath,{encoding:'utf-8',flag:'a+'});
    content = content.replace(/[\n\r]/g,' '); 
    console.log(content,'Length: ',content.length);
    write_();
   } catch(err) {
    console.error(err);
   }
}

async function write_() {
    try { 
        await write(wrtiepath,`content: ${content}`,{encoding:'utf-8',flag:'w+'});
    } catch(err) {
        console.error(err);
    }
} 
read_(); 