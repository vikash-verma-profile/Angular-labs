var hellowordl="Hi";
var sample;
console.log(hellowordl);


//tuple
var sampleTuple=[10,"Vikash"];
console.log(sampleTuple[1]);

//Union
var val:string | number | boolean;
val=121212;
console.log(val);
val="Angular";
console.log(val);
val=false;
console.log(val);

Example("Vikash");

function Example(name: string | string[]) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    for (let index = 0; index < name.length; index++) {
      const element = name[index];
    }
  }
}