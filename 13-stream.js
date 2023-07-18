const fs = require('fs');
const path='./txt/bigFile.txt'; //wrong file for stream error handling...
// for(let i=0;i<100;i++) {
//     for(let j=0;j<100;j++) {
//         let str = `i: ${i} j: ${j} \n`;
//         fs.writeFileSync(path,str,{encoding:'utf-8',flag:'a'});
//     }
// }

const stream = fs.createReadStream(path,{encoding:'utf-8',highWaterMark:9000});
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})