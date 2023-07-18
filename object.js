class person{
  constructor(name,age,v) {
    this.name=name;
    this.age=age;
    this.v=v;
  }
}

let p = new person('Abcd',29,['a','d',2,3,4]);
console.log(p.v);
let found = p.v.find((x)=>x==654546);
if(found!=undefined)
   console.log(found)
 
   function Circle(x) {
    this.y = x;
    this.print = function() {
      console.log(this.y);
    }
    this.increase=function() {
        this.y++;
    }
  }
  const c = new Circle(1);
  c.increase();
  c.print()
  
  
  
  
  