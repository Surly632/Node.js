console.time('Elapsed Time:');

class ice{
  x=['Strawberry','Dragon','Guava'];
  y="This is another string";
}

let icecream={
  x:['Strawberry','Dragon','Guava']
};
icecream.x.push('Apple');
const ic = new ice();
ic.x.push('Apple');
console.log((ic.x.at(2)));

console.timeEnd('Elapsed Time:');
