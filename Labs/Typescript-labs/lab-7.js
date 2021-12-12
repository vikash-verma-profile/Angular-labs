//static
var StaticDemo = /** @class */ (function () {
    function StaticDemo() {
    }
    StaticDemo.Display = function () {
        console.log("The value of num is " + StaticDemo.num);
    };
    return StaticDemo;
}());
StaticDemo.num = 12;
StaticDemo.Display();
//instance of
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var ObjP = new Person();
var isPerson = ObjP instanceof Person;
console.log(isPerson);
