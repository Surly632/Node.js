const { log, Console } = require('console');
const {readFileSync,writeFileSync} = require('fs');
let input = readFileSync('./txt/input.in','utf-8');
let output = writeFileSync('./txt/output.out','utf-8',{flag:'a+'});
let v= input.split('\n')


/* Another Way */
const fs = require('fs');
input = fs.readFileSync('./txt/input.in','utf-8');
v=input.split('\n');
for(let i =0; i<v.length;i++) {
    console.log(v[i]);
}

for(let i=0;i<2;i++)
 console.log();

let filepath = './txt/output.out';
let content = v.join('\n');
try {
    console.log(v.join('\n'));
    fs.writeFileSync(filepath,content,'utf-8');
}
catch(error) {
    console.error("Error!!!",error);
}

try {
const fs = require('fs');
const from_output = fs.readFileSync('./txt/output.out',{encoding:'utf-8',flag:'a+'});
const sep=/\n\r\t+/
let v = from_output.split(sep);
let str = v.join('\n');
for(let i=0;i<v.length;i++)
 console.log(v[i]);
 console.log();
console.log('Another output as String: ',str);
} catch (error) {
    console.error('error occured',error);
}
