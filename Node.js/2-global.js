/*
  Global - No Window!!!
  __dirname - path to current directory
  __filename - filename
  require - function to use module (commonjs)
  module - info about current module (file)
  process - info about env where the program is being executed
*/

console.log(__dirname,__filename);
console.log(__filename);
console.log(require);
setInterval(() => {
     console.log('Hello Madafaka!');
     console.log('Fuck Js');
}
,1000);
