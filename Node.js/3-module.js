/*
Common js : Every file is module by default
Modules - Encapsulatd code (Only share minimum)
*/
const func=require('./3-module_function')
const name=require('./3-module_name')
require('./3-mind-grenade')
console.log(`${name.Trisheta}`);
func.sayHi(name.Trisheta)
