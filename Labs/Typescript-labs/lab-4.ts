//Classes and Objects

class class_name{
    //1.Fields
    //2.Constructor  constructor()
    //3.Funcions function 
}

class Car{
    //fields
    engine:string;
    constructor(_engine:string){
        this.engine=_engine;
    }
    Display():void{
        console.log("Engine value is "+this.engine);
    }
}
var obj=new Car("BS6");
obj.Display();