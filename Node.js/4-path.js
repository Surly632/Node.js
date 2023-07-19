const path = require('path');
const name = path.sep;
console.log(name);

const filepath = path.join('/content','subfolder','filename.txt');
console.log(filepath);
const absolute = path.resolve(__dirname,'3-module.js');
console.log(absolute);
