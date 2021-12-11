//classes with Inheritance

//import {class_name} from './lab-4'

class Shape{
    Area:Number;
    constructor(_area:Number) {
        this.Area=_area;
    }
}
class Circle extends Shape{
    radius:Number;
    constructor(_radius:Number,_area:Number) {
        super(_area);
        this.radius=_radius;
    }

    Display():void
    {
        console.log("Area of the circle"+this.Area);
    }
}

var obj=new Circle(2,223);
obj.Display();

//Multi level
class Root{
    sample:string;
}
class Child extends Root{

}
class Leaf extends Child{

}
var objL=new Leaf();
objL.sample="5";
console.log(objL.sample);
