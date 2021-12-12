//static
class StaticDemo{
    static num:Number;
    static Display(){
        console.log("The value of num is "+StaticDemo.num);
    }
}
StaticDemo.num=12;
StaticDemo.Display();

//instance of

class Person{}
var ObjP=new Person();
var isPerson=ObjP instanceof Person;
console.log(isPerson);