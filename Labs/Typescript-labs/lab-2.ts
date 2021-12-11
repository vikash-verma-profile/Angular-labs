//Interfaces

//oops

interface IPerson{
    firstName:string,
    lastName:string,
    Display:()=>string
}

var SamplePerson:IPerson={
    firstName:"Rohit",
    lastName:"Sharma",
    Display:():string=>{return "Hello i am Interface Person"; }
}

console.log(SamplePerson.firstName);
console.log(SamplePerson.lastName);
console.log(SamplePerson.Display());