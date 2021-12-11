//classes with Inheritance

//import {class_name} from './lab-4'

class Shape{
    Area:Number;
    constructor(_area:number) {
        this.Area=_area;
    }
}
class Circle extends Shape{
    Display():void
    {
        console.log("Area of the circle"+this.Area);
    }
}

var obj=new Circle(223);
obj.Display();
