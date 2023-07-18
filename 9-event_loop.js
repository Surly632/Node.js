function delay(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
delay(2000).then(()=>{
    console.log('After delay 2000 ms');
});

function print(){
    console.log('hello');
}
 delay(2000);
print();
setTimeout(()=>{
    console.log('Arrow Function');
},400);