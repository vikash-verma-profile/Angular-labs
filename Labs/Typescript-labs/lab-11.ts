//DO's and Do'nt in typescript

//1.Using Any type 
var value:string;
value="1";
//value=1;
console.log(value);

//2.callbacks types

//Incorrect way
function fnsample(x:()=>any){
    x();
}
//Corerct way of doing
function fnsample2(x:()=>void){
    x();
}


//3.optional paramenters
//optonal parameters in callbacks

function displaysample(input?:string){

}
displaysample();
interface ISampleDisplay{
    //use case for error or success message
    getValueforDisplay(display:(data:unknown,timetodisplay?:number)=>void):void;
}


interface ISampleDisplay2{
    //if the caller does not care about the timetodisplay no need to make the parameter optional
    getValueforDisplay(display:(data:unknown,timetodisplay:number)=>void):void;
}

//number vs Number,String,Boolean,Symbol and Object --non-primitve boxed object

//number is recommned primitive types used into javascript



