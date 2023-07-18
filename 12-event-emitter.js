const eventEmitter = require('events');
const emitter=new  eventEmitter();

emitter.on('response',()=>{
    console.log('Hello, Data Received!');
})

emitter.on('response',()=>{
    console.log('Hello, Another data received!');
});
emitter.on('second_response',(name,age)=>{
console.log(`${name} ${age}`);
});
emitter.emit('response');
emitter.emit('second_response','John The Don',26);