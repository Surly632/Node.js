const { log } = require("console");


function time(ok,ms) {
    return new Promise((resolve, reject) => {
      if (ok) {
        setTimeout(resolve, ms);
      } else {
         reject('ok is false');
         return;
      }
    });
  }
  
  async function myAsyncFunction() {
    try {
      console.log('Start');
      await time(true,2000);
      console.log('After 2 seconds');
      await time(true,200);
      console.log('After 2 seconds and 200 ms');

      await time(true,100);
      let x = ()=>{
        console.log('This is anoher arrow function');
      };
      x();

    } catch (error) {
      console.error('Error:', error);
    }
  }

  
//   myAsyncFunction();
  console.log('Hello!');
  console.log('Hello');