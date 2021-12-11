//interfaces with inheritance
interface Person{
    age:Number;
}
interface Musician extends Person{
    instrument:string;
}

var drmmer=<Musician>{};
drmmer.age=27;
drmmer.instrument="Drums";
console.log(drmmer.age);
console.log(drmmer.instrument);
